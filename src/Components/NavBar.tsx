import {
  HashRouter as Router,
  Link,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import ArtPage from "../Pages/ArtPage";
import ProgrammingPage from "../Pages/ProgrammingPage";
import "../App.css";

function NavBar() {
  return (
    <div className="navBar">
      <Router basename="/">
        <div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/art">Art</NavLink>
            <NavLink to="/programming">Programming</NavLink>
          </nav>
        </div>

        <div className="header">WELCOME</div>

        <Routes>
          <Route path="/" element="" />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/programming" element={<ProgrammingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavBar;
