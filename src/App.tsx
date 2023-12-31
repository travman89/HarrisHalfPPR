import Home from "./Home";
import { theme } from "./theme";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useTheme } from "./helpers";

const AppContainer = styled.div`
  background: ${(props) => props.theme.background};
`;

const NavContainer = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HHPPR = styled.span`
  font-family: "Atmospheric";
  font-weight: 600;
  font-size: 24px;
  text-align: left;
  margin-left: 40px;
  color: ${(props) => props.theme.primary};
  text-shadow: ${(props) => props.theme.green} 2px 2px 1px;
  @media (max-width: 440px) {
    font-size: 24px;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <HHPPR>HHPPR</HHPPR>
      <div />
    </NavContainer>
  );
};
function App() {
  const { appTheme } = useTheme();
  return (
    <ThemeProvider theme={theme[appTheme]}>
      <AppContainer>
        <NavBar></NavBar>
        <BrowserRouter basename="/">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/:rank"} element={<Home />} />
            <Route path={"*"} element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
