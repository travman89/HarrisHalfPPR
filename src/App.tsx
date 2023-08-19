import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div style={{ backgroundColor: "#f9ca10" }}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path={"*"} Component={Home}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
