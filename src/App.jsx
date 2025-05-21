import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Navbar from "./components.jsx/Navbar";
import { useContext } from "react";
import { tabContext } from "./contexts/TabContext";
import MobileMenu from "./components.jsx/MobileMenu";

function App() {
  const {isMobile} = useContext(tabContext)

  return (
    <div className="app  text-white">
     {isMobile && <MobileMenu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
