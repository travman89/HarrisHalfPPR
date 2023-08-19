import { useEffect, useState } from "react";
import { halfPPR } from "../data/halfppr.js";
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
} from "./components.js";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const positions = ["QB", "RB", "WR", "TE"];
  const [sortedRanks, setSortedRanks] = useState(halfPPR);
  const [fullRanks, setFullRanks] = useState(
    !positions.includes(location.pathname.replace("/", ""))
  );

  const positionFilter = () => {
    const selectedPosition = location.pathname.replace("/", "");
    return positions.includes(selectedPosition)
      ? halfPPR.filter((player) => player.position == selectedPosition)
      : halfPPR;
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
    const selectedPosition = location.pathname.replace("/", "");
    setFullRanks(!positions.includes(selectedPosition));
    setSortedRanks(positionFilter());
  }, [location]);

  return (
    <Container>
      <Heading>Harris Footbal Half PPR unofficial ranks</Heading>
      <Disclaimer>
        These are <b>NOT</b> offical ranks from Crhistopher Harris <br /> These
        ranks are an average of the standard and full ppr ranks found on
        harrisfootball.com <br /> This site is not offiliated or endorsed by
        Christopher Harris in any way.
      </Disclaimer>
      <PositionRow>
        <PositionButton
          style={{ border: getUnderline("all") ? "1px solid" : "none" }}
          onClick={() => positionPress("")}
        >
          All
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
        {fullRanks ? (
          <Position style={{ fontWeight: 600, textDecoration: "underline" }}>
            Pos
          </Position>
        ) : (
          <Position style={{ fontWeight: 600, textDecoration: "underline" }}>
            0.5
          </Position>
        )}
        <StandardRank style={{ fontWeight: 600, textDecoration: "underline" }}>
          Std
        </StandardRank>
        <PPRRank style={{ fontWeight: 600, textDecoration: "underline" }}>
          Ppr
        </PPRRank>
      </RankRow>
      {sortedRanks.map((player, i) => (
        <RankRow key={`player-rank-${i}`}>
          <Rank>{i + 1}</Rank>
          <Name>{player.name}</Name>
          {fullRanks ? (
            <Position>{player.position}</Position>
          ) : (
            <Position>{player.rank}</Position>
          )}
          <StandardRank>{player.standardRank}</StandardRank>
          <PPRRank>{player.pprRank}</PPRRank>
        </RankRow>
      ))}
    </Container>
  );
};

export default Home;
