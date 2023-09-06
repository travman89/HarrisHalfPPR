import { useEffect, useState } from "react";
import all from "../data/all.json";
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
  const [sortedRanks, setSortedRanks] = useState<playerData[]>(all);

  const positionFilter = () => {
    const selectedPosition = location.pathname.replace("/", "");
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
        setSortedRanks(all);
        break;
    }
  };

  const positionPress = (position: string) => {
    navigate(`/${position}`);
  };

  const getUnderline = (position) => {
    const selectedPosition = location.pathname.replace("/", "");
    if (position === "all" && !positions.includes(selectedPosition)) {
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
    const selectedPosition = location.pathname.replace("/", "");
    switch (selectedPosition) {
      case "DEF":
      case "QB":
      case "RB":
      case "WR":
      case "TE":
        return "Opp";
      default:
        return "Pos";
    }
  };

  const getSecondColumnDynamicHeading = () => {
    const selectedPosition = location.pathname.replace("/", "");
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
    const selectedPosition = location.pathname.replace("/", "");
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
    const selectedPosition = location.pathname.replace("/", "");
    switch (selectedPosition) {
      case "DEF":
      case "QB":
      case "TE":
      case "RB":
      case "WR":
        return player.team;
      default:
        return player.position;
    }
  };
  const getSecondColumnDynamicData = (player: playerData) => {
    const selectedPosition = location.pathname.replace("/", "");
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
    const selectedPosition = location.pathname.replace("/", "");
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
        Harris Footbal half PPR unofficial <br /> Week 1 ranks
      </Heading>
      <Disclaimer>
        These are <b>NOT</b> offical ranks from Christopher Harris. <br />{" "}
        {`These
        ranks are an average of the standard and full PPR ranks found on `}
        <a
          href="https://www.harrisfootball.com/top-160-ranks-draft"
          target="_blank"
        >
          harrisfootball.com
        </a>
        . <br /> This site is not affiliated with Christopher Harris.
      </Disclaimer>
      <Updated>(Updated 9/6 - 9:00am PST)</Updated>
      <PositionRow>
        <PositionButton
          style={{ border: getUnderline("all") ? "1px solid" : "none" }}
          onClick={() => positionPress("")}
        >
          RoS
        </PositionButton>
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
          DEF
        </PositionButton>
      </PositionRow>
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
        <Position style={{ fontWeight: 600, textDecoration: "underline" }}>
          {getSecondColumnDynamicHeading()}
        </Position>
        <Position style={{ fontWeight: 600, textDecoration: "underline" }}>
          {getThirdColumnDynamicHeading()}
        </Position>
      </RankRow>
      {sortedRanks.map((player, i) => (
        <RankRow key={`player-rank-${i}`}>
          <Rank>{i + 1}</Rank>
          <Name>{player.name}</Name>
          <Position style={{ width: "55px", textAlign: "left" }}>
            {getFirstColumnDynamicData(player)}
          </Position>
          <StandardRank>{getSecondColumnDynamicData(player)}</StandardRank>
          <PPRRank>{getThirdColumnDynamicData(player)}</PPRRank>
        </RankRow>
      ))}
    </Container>
  );
};

export default Home;
