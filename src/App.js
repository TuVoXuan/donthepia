import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AppPath } from "./constant";
import RoadMap from "./pages/Roadmap/Roadmap";

function App() {
  return (
    <Routes>
      <Route path={AppPath.Home} element={<Home />} />
      <Route path={AppPath.Roadmap} element={<RoadMap/>} />
    </Routes>
  );
}

export default App;
