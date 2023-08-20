import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div style={{ backgroundColor: "#f9ca10" }}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/:rank"} element={<Home />} />
          <Route path={"*"} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
