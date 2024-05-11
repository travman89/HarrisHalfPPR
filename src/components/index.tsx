import { useState } from "react";
import styled from "styled-components";
import { ThemeType } from "../helpers";
import SunComponent from "../assets/sun.svg?react";
import MoonComponent from "../assets/moon.svg?react";
const TableWrapper = styled.table`
  width: 100%;
`;
const Container = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
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
  text-shadow: ${(props) => props.theme.buttonColor} 3px 3px 1px;
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
  @media (max-width: 800px) {
    text-align: center;
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
  }
`;

const RankRow = styled.tr`
  display: flex;
  margin: 0 auto;
  flex-basis: auto;
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  &:nth-child(odd) {
    background-color: ${(props) => props.theme.rowBackground};
  }
  td {
    padding: 0 10px;
  }
  @media (max-width: 380px) {
    max-width: 330px;
    td {
      font-size: 12px;
      margin: 0;
      padding: 0 5px;
    }
  }
  @media (max-width: 440px) and (min-width: 381px) {
    max-width: 360px;
    td {
      font-size: 12px;
      margin: 0;
      padding: 0 5px;
    }
  }
`;

const ColumnHeadings = styled(RankRow)`
  background-color: transparent !important;
  margin-bottom: 5px;
`;
const Rank = styled.td`
  width: 10%;
  text-align: left;
  color: ${(props) => props.theme.buttonColor} !important;
  font-weight: 600;
`;
const Name = styled.td`
  width: 45%;
  flex: 1;
  text-align: left;
  overflow: hidden;
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

const PositionRow = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  margin: 0 auto;
  @media (max-width: 800px) {
    margin: 15px auto;
    padding: 0;
  }
`;

const PositionButton = styled.button<{ selected: boolean }>`
  transition: all 0s !important;
  cursor: pointer;
  border: none;
  padding: 0 5px;
  margin: 0 2px;
  text-align: center;
  color: ${(props) => (props.selected ? "#FCFCFC" : props.theme.buttonColor)};
  border-radius: 4px;
  width: 46px;
  height: 30px;
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? 600 : 400)};
  box-sizing: border-box;
  background: none;
  background-color: ${(props) =>
    props.selected ? props.theme.buttonColor : "none"};
`;

const TableContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.theme.containerColor};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  @media (max-width: 800px) {
    padding: 10px;
    border-radius: 0px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const AppContainer = styled.div`
  background: ${(props) => props.theme.background};
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  * {
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    outline: none;
  }
`;

const NavContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    height: 60px;
  }
`;

const HHPPR = styled.span`
  font-family: "Atmospheric";
  font-weight: 600;
  font-size: 24px;
  text-align: left;
  margin-left: 40px;
  color: ${(props) => props.theme.primary};
  text-shadow: ${(props) => props.theme.buttonColor} 2px 2px 1px;
  @media (max-width: 800px) {
    margin-left: 30px;
  }
  @media (max-width: 440px) {
    font-size: 24px;
    margin-left: 20px;
  }
`;

const NavBar = ({ children }) => {
  return (
    <NavContainer>
      <HHPPR>HHPPR</HHPPR>
      {children}
    </NavContainer>
  );
};

const CheckLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 20px;
`;

const CheckInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    &:before {
      -webkit-transform: translateX(24px);
      -ms-transform: translateX(24px);
      transform: translateX(24px);
    }
  }
`;

const Slider = styled.span`
  -webkit-tap-highlight-color: transparent;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.toggleBackground};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
    background-color: ${(props) => props.theme.background};
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Sun = styled(SunComponent)<{ $toggled: boolean }>`
  width: 16px;
  height: 16px;
  margin: 0 3px;
  & path {
    fill: ${(props) =>
      props.$toggled ? props.theme.primary : props.theme.background};
  }
`;

const Moon = styled(MoonComponent)<{ $toggled: boolean }>`
  width: 13px;
  height: 13px;
  margin: 0 3px;
  & path {
    fill: ${(props) =>
      !props.$toggled ? props.theme.primary : props.theme.background};
  }
`;

const ToggleIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 800px) {
    margin-right: 20px;
  }
  @media (max-width: 440px) {
    margin-right: 10px;
  }
`;

const ModeToggle = ({
  appTheme,
  updateTheme,
}: {
  appTheme: ThemeType;
  updateTheme: (theme: ThemeType) => void;
}) => {
  const [toggleState, setToggleState] = useState({
    theme: appTheme,
    checked: appTheme === "dark",
  });
  const handleChange = () => {
    const newThemeState = { ...toggleState };
    newThemeState.checked = !newThemeState.checked;
    newThemeState.theme = newThemeState.theme === "dark" ? "light" : "dark";
    setToggleState({ ...newThemeState });
    updateTheme(newThemeState.theme);
  };
  return (
    <ToggleIconWrapper>
      <Sun $toggled={toggleState.checked} />
      <CheckLabel>
        <CheckInput
          type="checkbox"
          checked={toggleState.checked}
          onClick={handleChange}
          onChange={() => null}
        />
        <Slider />
      </CheckLabel>
      <Moon $toggled={toggleState.checked} />
    </ToggleIconWrapper>
  );
};

const HarrisLink = styled.a`
  color: ${(props) => props.theme.buttonColor};
`;

const UpdatedText = styled.p`
  text-align: center;
  width: 100%;
  color: ${(props) => props.theme.primary};
  margin: 10px auto 0;
  font-size: 14px;
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
  ModeToggle,
  AppContainer,
  NavBar,
  HarrisLink,
  Sun,
  Moon,
  ToggleIconWrapper,
  ColumnHeadings,
  UpdatedText,
};
