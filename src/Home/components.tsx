import styled from "styled-components";

const TableWrapper = styled.table``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  max-width: calc(100vw - 60px);
  padding: 0 20px 40px;
  margin: 0 auto;
  overflow: hidden;
  background-color: white;
  @media (max-width: 440px) {
    width: 100%;
  }
  div {
    color: #505050;
  }
  td {
    color: #505050;
  }
`;

const Heading = styled.div`
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  padding: 20px 0;
  color: rgba(35, 52, 88, 0.84) !important;
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
const RowWrapper = styled.tbody``;

const RankRow = styled.tr`
  display: flex;
  margin: 0 auto;
  flex-basis: auto;
  max-width: 460px;
  justify-content: center;
  padding-bottom: 4px;
  td {
    margin: 0 5px;
  }
  @media (max-width: 380px) {
    max-width: 330px;
    td {
      font-size: 12px;
      margin: 0;
    }
  }
  @media (max-width: 440px) and (min-width: 381px) {
    max-width: 360px;
    td {
      font-size: 12px;
      margin: 0;
    }
  }
`;
const Rank = styled.td`
  width: 40px;
  text-align: left;
`;
const Name = styled.td`
  width: 190px;
  text-align: left;
  overflow: hidden;
  text-wrap: nowrap;
  @media (max-width: 440px) {
    width: 170px;
  }
`;

const Position = styled.td`
  width: 35px;
  text-align: left;
  @media (max-width: 440px) {
    width: 30px;
  }
`;
const StandardRank = styled.td`
  width: 35px;
  text-align: left;
  @media (max-width: 440px) {
    width: 30px;
  }
`;

const PPRRank = styled.td`
  width: 35px;
  text-align: left;
  @media (max-width: 440px) {
    width: 30px;
  }
`;

const PositionRow = styled.td`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  margin: 0 auto;
`;

const PositionButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0 5px;
  margin: 0 2px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  text-align: center;
  color: #505050;
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
  TableWrapper,
  RowWrapper,
};
