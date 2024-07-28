import { theme } from "./theme"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useTheme } from "./helpers"
import { AppContainer, ModeToggle, NavBar } from "./components"
import { lazy } from "react"
const Home = lazy(() => import("./Home"))

function App() {
  const { appTheme, updateTheme } = useTheme()
  return (
    <ThemeProvider theme={theme[appTheme]}>
      <AppContainer>
        <NavBar>
          <ModeToggle appTheme={appTheme} updateTheme={updateTheme} />
        </NavBar>
        <BrowserRouter basename="/">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/:rank"} element={<Home />} />
            <Route path={"*"} element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
