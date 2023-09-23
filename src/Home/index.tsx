import { useEffect, useState } from "react";
// import all from "../data/all.json";
import wr from "../data/wr.json";
import te from "../data/te.json";
import qb from "../data/qb.json";
import def from "../data/def.json";
import rb from "../data/rb.json";

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
  const positions = ["QB", "RB", "WR", "TE", "DEF"];
  const [sortedRanks, setSortedRanks] = useState<playerData[]>(qb);

  const getSelectedLocation = () => {
    return location.pathname.replace("/", "");
  };

  const positionFilter = () => {
    const selectedPosition = getSelectedLocation();
    switch (selectedPosition) {
      case "QB":
        setSortedRanks(qb);
        break;
      case "RB":
        setSortedRanks(rb);
        break;
      case "WR":
        setSortedRanks(wr);
        break;
      case "TE":
        setSortedRanks(te);
        break;
      case "DEF":
        setSortedRanks(def);
        break;
      default:
        setSortedRanks(qb); //change this to all if season long ranks come back
        break;
    }
  };

  const positionPress = (position: string) => {
    navigate(`/${position}`);
  };

  const is3Columns = (): boolean => {
    switch (getSelectedLocation()) {
      case "QB":
      case "TE":
      case "DEF":
      default:
        return true;
      case "WR":
      case "RB":
        return false;
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
    // const selectedPosition = getSelectedLocation();
    return "Opp";
    //  used with season long ranks
    // switch (selectedPosition) {
    //   case "DEF":
    //   case "QB":
    //   case "RB":
    //   case "WR":
    //   case "TE":
    //     return "Opp";
    //   default:
    //     return "Pos";
    // }
  };

  const getSecondColumnDynamicHeading = () => {
    const selectedPosition = getSelectedLocation();
    switch (selectedPosition) {
      case "QB":
      case "DEF":
      case "TE":
        return "";
      case "RB":
      case "WR":
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
      case "RB":
      case "WR":
      default:
        return "PPR";
    }
  };

  const getFirstColumnDynamicData = (player: playerData) => {
    return player.team;
    // const selectedPosition = getSelectedLocation();
    // used when ros ranks are present
    // switch (selectedPosition) {
    //   case "DEF":
    //   case "QB":
    //   case "TE":
    //   case "RB":
    //   case "WR":
    //     return player.team;
    //   default:
    //     return player.position;
    // }
  };
  const getSecondColumnDynamicData = (player: playerData) => {
    const selectedPosition = getSelectedLocation();
    switch (selectedPosition) {
      case "QB":
      case "DEF":
      case "TE":
        return "";
      case "RB":
      case "WR":
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
      case "RB":
      case "WR":
      default:
        return player.pprRank;
    }
  };

  return (
    <Container>
      <Heading>
        Harris Footbal half PPR unofficial <br /> Week 3 ranks
      </Heading>
      <Disclaimer>
        These are <b>NOT</b> offical ranks from Christopher Harris. <br />{" "}
        {`These
        ranks are an average of the standard and full PPR ranks found on `}
        <a href="https://www.harrisfootball.com/ranks" target="_blank">
          harrisfootball.com
        </a>
        . <br /> This site is not affiliated with Christopher Harris.
      </Disclaimer>
      <Updated>(Updated 9/23 - 7:25pm PST)</Updated>
      <PositionRow>
        {/* <PositionButton
          style={{ border: getUnderline("all") ? "1px solid" : "none" }}
          onClick={() => positionPress("")}
        >
          RoS
        </PositionButton> */}
        <PositionButton
          style={{ border: getUnderline("QB") ? "1px solid" : "none" }}
          onClick={() => positionPress("QB")}
        >
          QB
        </PositionButton>
        <PositionButton
          style={{ border: getUnderline("RB") ? "1px solid" : "none" }}
          onClick={() => positionPress("RB")}
        >
          RB
        </PositionButton>
        <PositionButton
          style={{ border: getUnderline("WR") ? "1px solid" : "none" }}
          onClick={() => positionPress("WR")}
        >
          WR
        </PositionButton>
        <PositionButton
          style={{ border: getUnderline("TE") ? "1px solid" : "none" }}
          onClick={() => positionPress("TE")}
        >
          TE
        </PositionButton>
        <PositionButton
          style={{ border: getUnderline("DEF") ? "1px solid" : "none" }}
          onClick={() => positionPress("DEF")}
        >
          Def
        </PositionButton>
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
    </Container>
  );
};

export default Home;
