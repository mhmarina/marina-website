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
import { supabase } from "../SupabaseClient";

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

  //fetch number of clicks on first render
  async function fetchHits() {
    try {
      const { data, error } = await supabase
        .from("hits")
        .select("num_hits")
        .eq("id", 1);

      if (error) {
        console.log("ERROR FETCHING HITS");
        setNumHits(0);
      } else {
        const initHits = data ? Number(data[0].num_hits) : -1;
        setNumHits(initHits);
        console.log("number of hits on first render: " + initHits);
      }
    } catch (error) {
      console.error("An error occurred while fetching hits:", error);
      setNumHits(0);
    }
  }

  useEffect(() => {
    fetchHits();
  }, []);

  async function updateHits(newNumHits: number) {
    try {
      const { data, error } = await supabase
        .from("hits")
        .update({
          num_hits: newNumHits,
          last_updated: new Date().toISOString(),
        })
        .eq("id", 1)
        .select();
      if (error) {
        console.error("Error updating hits:", error);
      } else {
        console.log("Hits updated successfully:", data[0]);
      }
    } catch (error) {
      console.log("An error occured while updating hits: ", error);
    }
  }

  function onHitClick() {
    setNumHits((prevNumHits) => {
      const newNumHits = prevNumHits + 1;
      updateHits(newNumHits);
      console.log(newNumHits);
      return newNumHits;
    }); //store total number in a database so it persists after refreshing
  }

  useEffect(() => {
    if (numHits % 5 === 0) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * headers.length);
      } while (newIndex === randomIndex);
      setHeader(headers[newIndex]);
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
                <button onClick={() => onHitClick()}>hit me!</button>hits:
                {Number(numHits)}
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
