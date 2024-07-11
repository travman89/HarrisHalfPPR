import { useEffect, useState } from "react";
import wr from "../data/wr.json";
import te from "../data/te.json";
import qb from "../data/qb.json";
import def from "../data/def.json";
import rb from "../data/rb.json";
// import ros from "../data/ros.json";

import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Disclaimer,
  Heading,
  RankRow,
  Rank,
  Name,
  Position,
  PositionRow,
  PositionButton,
  TableWrapper,
  ColumnHeadings,
  TableContainer,
  SubHeading,
  TableHeadingRowWrapper,
  FilterContainer,
  HarrisLink,
  UpdatedText,
} from "../components/index.js";

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
  // const positions = ["QB", "RB", "WR", "TE", "DEF", "ROS"];   positions for weekly ranks
  const positions = ["QB", "RB", "WR", "TE", "DEF"];
  const positionDataMap = {
    QB: qb,
    RB: rb,
    WR: wr,
    TE: te,
    DEF: def,
    // ROS: ros,
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

  const is3HarrisColumns = (): boolean => {
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
      case "DEF": // eventually nuke this
        return " ";
      default:
        // return "Opp";  TODO swap back to Opp
        return "Team";
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
      <FilterContainer>
        <SubHeading>2024 Ranks</SubHeading>
        <PositionRow>
          {positions.map((position) => (
            <PositionButton
              selected={getUnderline(position)}
              onClick={() => positionPress(position)}
              key={`position-${position}`}
            >
              {position}
            </PositionButton>
          ))}
        </PositionRow>
      </FilterContainer>
      <TableContainer>
        <TableWrapper style={{ borderSpacing: 0 }}>
          <TableHeadingRowWrapper>
            <ColumnHeadings style={{ marginBottom: "10px" }}>
              <Position style={{ fontWeight: 600 }}>Rank</Position>
              <Name
                style={{
                  fontWeight: 600,
                }}
              >
                Name
              </Name>
              <Position
                style={{
                  fontWeight: 600,
                }}
              >
                {getFirstColumnDynamicHeading()}
              </Position>
              {!is3HarrisColumns() && (
                <Position style={{ fontWeight: 600 }}>
                  {getSecondColumnDynamicHeading()}
                </Position>
              )}
              {!is3HarrisColumns() && (
                <Position style={{ fontWeight: 600 }}>
                  {getThirdColumnDynamicHeading()}
                </Position>
              )}
            </ColumnHeadings>
          </TableHeadingRowWrapper>
        </TableWrapper>
        <TableWrapper>
          <tbody>
            {sortedRanks.map((player, i) => (
              <RankRow key={`player-rank-${i}`}>
                <Rank>{i + 1}</Rank>
                <Name>{player.name}</Name>
                <Position>{getFirstColumnDynamicData(player)}</Position>

                {!is3HarrisColumns() && (
                  <Position>{getSecondColumnDynamicData(player)}</Position>
                )}
                {!is3HarrisColumns() && (
                  <Position>{getThirdColumnDynamicData(player)}</Position>
                )}
              </RankRow>
            ))}
          </tbody>
        </TableWrapper>
        <UpdatedText> updated 7/10 - 6:55PM PST</UpdatedText>
      </TableContainer>
      <Heading>Harris Half PPR</Heading>
      <Disclaimer>
        These are <b>NOT</b> offical ranks from Christopher Harris. <br />{" "}
        {`These
        ranks are an average of the standard and full PPR ranks found on `}
        <HarrisLink href="https://www.harrisfootball.com/ranks" target="_blank">
          harrisfootball.com
        </HarrisLink>
        . <br /> This site is not affiliated with Christopher Harris.
      </Disclaimer>
    </Container>
  );
};

export default Home;
