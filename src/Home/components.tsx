import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  max-width: 100vw;
  padding: 0 20px 40px;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
`;

const Heading = styled.div`
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  padding-bottom: 30px;
  color: rgba(35, 52, 88, 0.84);
`;

const Disclaimer = styled.div`
  text-align: center;
  font-size: 14px;
  padding-bottom: 20px;
`;

const Updated = styled.div`
  font-size: 14px;
  padding-bottom: 30px;
`;

const RankRow = styled.div`
  display: flex;
  margin: 0 auto;
  width: 360px;
  max-width: 100%;
  justify-content: space-between;
  padding-bottom: 4px;
`;
const Rank = styled.div`
  width: 40px;
  text-align: center;
`;
const Name = styled.div`
  width: 190px;
  text-align: left;
  overflow: hidden;
  text-wrap: nowrap;
`;

const Position = styled.div`
  width: 30px;
  text-align: center;
`;
const StandardRank = styled.div`
  width: 30px;
  text-align: center;
`;

const PPRRank = styled.div`
  width: 30px;
  text-align: center;
`;

const PositionRow = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  padding-bottom: 20px;
  margin: 0 auto;
`;

const PositionButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 30px;
  text-align: center;
`;

export {
  Container,
  Heading,
  Disclaimer,
  Updated,
  RankRow,
  Rank,
  Name,
  StandardRank,
  PPRRank,
  Position,
  PositionRow,
  PositionButton,
};
