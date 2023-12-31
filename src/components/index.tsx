import styled from "styled-components";

const TableWrapper = styled.table`
  width: 100%;
`;
const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 440px) {
    width: 100%;
  }
  div {
    color: ${(props) => props.theme.primary};
  }
  td {
    color: ${(props) => props.theme.primary};
  }
`;

const Heading = styled.h1`
  font-family: "Atmospheric";
  font-weight: 600;
  font-size: 48px;
  text-align: center;
  padding: 40px 0;
  color: ${(props) => props.theme.primary};
  text-shadow: ${(props) => props.theme.green} 3px 3px 1px;
  @media (max-width: 440px) {
    font-size: 24px;
  }
  margin: 0;
`;

const SubHeading = styled.h2`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  font-weight: 600;
  font-size: 24px;
  text-align: left;
  margin: 0;
  color: ${(props) => props.theme.primary};
  @media (max-width: 440px) {
    font-size: 24px;
  }
`;
const Disclaimer = styled.div`
  text-align: center;
  font-size: 12px;
  padding: 35px 0 15px;
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
const TableHeadingRowWrapper = styled.tbody`
  width: 100%;
`;
const RowWrapper = styled.tbody`
  width: 100%;
  &:nth-child(odd) {
    background-color: ${(props) => props.theme.rowBackground};
    > tr > td {
      line-height: 36px;
    }
  }
`;

const RankRow = styled.tr`
  display: flex;
  margin: 0 auto;
  flex-basis: auto;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  td {
    padding: 0 10px;
  }
  /*
  td:first-child {
    border-top-left-radius: 6px;
  }
  td:last-child {
    border-top-right-radius: 6px;
  }
  td:first-child {
    border-bottom-left-radius: 6px;
  }
  td:last-child {
    border-bottom-right-radius: 6px;
  } */
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
  width: 10%;
  text-align: left;
`;
const Name = styled.td`
  width: 45%;
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-wrap: nowrap;
`;

const Position = styled.td`
  width: 10%;
  text-align: left;
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

const PositionButton = styled.button<{ selected: boolean }>`
  cursor: pointer;
  border: none;
  padding: 0 5px;
  margin: 0 2px;
  text-align: center;
  color: ${(props) => (props.selected ? "#FCFCFC" : props.theme.green)};
  border-radius: 4px;
  width: 46px;
  height: 30px;
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? 600 : 400)};
  box-sizing: border-box;
  background: none;
  background-color: ${(props) => (props.selected ? props.theme.green : "none")};
`;

const TableContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.theme.containerColor};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
  SubHeading,
  TableContainer,
  TableHeadingRowWrapper,
  FilterContainer,
};
