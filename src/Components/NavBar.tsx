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
import { useEffect, useState } from "react";
import HomePage from "../Pages/HomePage";

function NavBar() {
  const headers = [
    "MEMEME",
    "CSS IS LOVE",
    "EPIC SITE",
    "REFRESH ME",
    "HIT THIS",
    "CHECK ME OUT",
    "LOL",
    "CATCHPHRASE",
    "MARINA",
    "TEST TEST",
  ];
  let randomIndex = Math.floor(Math.random() * headers.length);

  const [numHits, setNumHits] = useState(0);
  const [header, setHeader] = useState(headers[randomIndex]); //on load

  function onHitClick() {
    setNumHits((numHits) => numHits + 1); //store total number in a database so it persists after refreshing
  }

  useEffect(() => {
    if (numHits % 5 === 0) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * headers.length);
      } while (newIndex === randomIndex);
      setHeader(headers[randomIndex]);
    }
  }, [numHits]); //only update again after mounting if numhits is divisible by 5

  return (
    <div className="navBar">
      <Router basename="/">
        <div>
          <nav>
            <div className="header">
              {header}
              <br />
              <div style={{ fontFamily: "monospace", fontSize: "10px" }}>
                <button onClick={() => onHitClick()}>hit me!</button>hits:{" "}
                {numHits}
              </div>
            </div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/art">Art</NavLink>
            <NavLink to="/programming">Programming</NavLink>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/programming" element={<ProgrammingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default NavBar;
