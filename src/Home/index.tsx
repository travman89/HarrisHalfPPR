import { useEffect, useState } from "react";
import wr from "../data/wr.json";
import te from "../data/te.json";
import qb from "../data/qb.json";
import def from "../data/def.json";
import rb from "../data/rb.json";
import ros from "../data/ros.json";

import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Disclaimer,
  Heading,
  RankRow,
  Rank,
  Name,
  StandardRank,
  PPRRank,
  Position,
  PositionRow,
  PositionButton,
  Updated,
  TableWrapper,
  RowWrapper,
} from "./components.js";

interface playerData {
  name: string;
  rank: number;
  standardRank?: number;
  pprRank?: number;
  position?: string;
  team?: string;
}
const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const positions = ["QB", "RB", "WR", "TE", "DEF", "ROS"];
  const positionDataMap = {
    QB: qb,
    RB: rb,
    WR: wr,
    TE: te,
    DEF: def,
    ROS: ros,
  };
  const [sortedRanks, setSortedRanks] = useState<playerData[]>(qb);

  const getSelectedLocation = () => {
    return location.pathname.replace("/", "");
  };

  const positionFilter = () => {
    const selectedPosition = getSelectedLocation();
    positions.includes(selectedPosition)
      ? setSortedRanks(positionDataMap[selectedPosition])
      : setSortedRanks(qb);
  };

  const positionPress = (position: string) => {
    navigate(`/${position}`);
  };

  const is3Columns = (): boolean => {
    switch (getSelectedLocation()) {
      case "WR":
      case "RB":
      case "ROS":
        return false;
      default:
        return true;
    }
  };

  const getUnderline = (position) => {
    const selectedPosition = getSelectedLocation();
    //this changes back to all
    if (position === "QB" && !positions.includes(selectedPosition)) {
      return true;
    } else if (
      positions.includes(selectedPosition) &&
      position == selectedPosition
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    positionFilter();
  }, [location]);

  const getFirstColumnDynamicHeading = () => {
    const selectedPosition = getSelectedLocation();
    switch (selectedPosition) {
      case "ROS":
        return "Pos";
      default:
        return "Opp";
    }
  };

  const getSecondColumnDynamicHeading = () => {
    const selectedPosition = getSelectedLocation();
    switch (selectedPosition) {
      case "QB":
      case "DEF":
      case "TE":
        return "";
      default:
        return "Std";
    }
  };
  const getThirdColumnDynamicHeading = () => {
    const selectedPosition = getSelectedLocation();
    switch (selectedPosition) {
      case "QB":
      case "TE":
      case "DEF":
        return "";
      default:
        return "PPR";
    }
  };

  const getFirstColumnDynamicData = (player: playerData) => {
    const selectedPosition = getSelectedLocation();
    switch (selectedPosition) {
      case "ROS":
        return player.position;
      default:
        return player.team;
    }
  };
  const getSecondColumnDynamicData = (player: playerData) => {
    const selectedPosition = getSelectedLocation();
    switch (selectedPosition) {
      case "QB":
      case "DEF":
      case "TE":
        return "";
      default:
        return player.standardRank;
    }
  };

  const getThirdColumnDynamicData = (player: playerData) => {
    const selectedPosition = getSelectedLocation();
    switch (selectedPosition) {
      case "QB":
      case "DEF":
      case "TE":
        return "";
      default:
        return player.pprRank;
    }
  };

  return (
    <Container>
      <Heading>
        Harris Footbal half PPR unofficial <br /> Week 14 ranks
      </Heading>
      <Updated>(Updated 12/8 - 5:30pm PST)</Updated>
      <PositionRow>
        {positions.map((position) => (
          <PositionButton
            style={{ border: getUnderline(position) ? "1px solid" : "none" }}
            onClick={() => positionPress(position)}
          >
            {position}
          </PositionButton>
        ))}
      </PositionRow>
      <TableWrapper>
        <RowWrapper>
          <RankRow style={{ marginBottom: "10px" }}>
            <Rank style={{ fontWeight: 600, textDecoration: "underline" }}>
              Rank
            </Rank>
            <Name
              style={{
                fontWeight: 600,
                textDecoration: "underline",
                textAlign: "center",
              }}
            >
              Name
            </Name>
            <Position
              style={{
                fontWeight: 600,
                textDecoration: "underline",
                width: "55px",
              }}
            >
              {getFirstColumnDynamicHeading()}
            </Position>
            {!is3Columns() && (
              <Position
                style={{ fontWeight: 600, textDecoration: "underline" }}
              >
                {getSecondColumnDynamicHeading()}
              </Position>
            )}
            {!is3Columns() && (
              <Position
                style={{ fontWeight: 600, textDecoration: "underline" }}
              >
                {getThirdColumnDynamicHeading()}
              </Position>
            )}
          </RankRow>
        </RowWrapper>
      </TableWrapper>
      <TableWrapper>
        {sortedRanks.map((player, i) => (
          <RowWrapper>
            <RankRow key={`player-rank-${i}`}>
              <Rank>{i + 1}</Rank>
              <Name>{player.name}</Name>
              <Position style={{ width: "55px" }}>
                {getFirstColumnDynamicData(player)}
              </Position>

              {!is3Columns() && (
                <StandardRank>
                  {getSecondColumnDynamicData(player)}
                </StandardRank>
              )}
              {!is3Columns() && (
                <PPRRank>{getThirdColumnDynamicData(player)}</PPRRank>
              )}
            </RankRow>
          </RowWrapper>
        ))}
      </TableWrapper>
      <Disclaimer>
        These are <b>NOT</b> offical ranks from Christopher Harris. <br />{" "}
        {`These
        ranks are an average of the standard and full PPR ranks found on `}
        <a href="https://www.harrisfootball.com/ranks" target="_blank">
          harrisfootball.com
        </a>
        . <br /> This site is not affiliated with Christopher Harris.
      </Disclaimer>
    </Container>
  );
};

export default Home;
