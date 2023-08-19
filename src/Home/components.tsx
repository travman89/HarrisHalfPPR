import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  max-width: calc(100vw - 60px);
  padding: 0 20px 40px;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
  @media (max-width: 440px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  padding: 20px 0;
  color: rgba(35, 52, 88, 0.84);
  @media (max-width: 440px) {
    font-size: 24px;
  }
`;

const Disclaimer = styled.div`
  text-align: center;
  font-size: 12px;
  padding-bottom: 15px;
  @media (max-width: 440px) {
    font-size: 10px;
  }
`;

const Updated = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  text-align: center;
  @media (max-width: 440px) {
    font-size: 10px;
  }
`;

const RankRow = styled.div`
  display: flex;
  margin: 0 auto;
  width: 360px;
  max-width: 100%;
  justify-content: space-between;
  padding-bottom: 4px;
  @media (max-width: 440px) {
    div {
      font-size: 12px;
    }
  }
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
