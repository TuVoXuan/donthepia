import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { AppPath } from "./constant";
function App() {
  return (
    <Routes>
      <Route path={AppPath.Home} element={<Home />} />
    </Routes>
  );
}

export default App;
