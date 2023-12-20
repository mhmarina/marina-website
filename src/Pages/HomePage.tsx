import "../App.css";

function HomePage() {
  return (
    <div className="homepage">
      <img className="avatar" src="../src/assets/curlss.png" />
      <div className="brief">
        <div
          style={{ fontSize: "24px", marginBottom: "5px", fontWeight: "bold" }}
        >
          Welcome to my website!
        </div>
        <div>This will serve as a collection of my projects as </div>
        <div>well as some frontend practice. Here are some links:</div>
      </div>
      <div className="listoflinks">
        <a href="https://github.com/mhmarina">Github</a>
        <a href="https://mhmarina.itch.io/">itch.io</a>
        <a href="https://www.linkedin.com/in/marina-nasralla/">LinkedIn</a>
        <a href="https://en.wikipedia.org/wiki/The_Hunger_Games">surprise</a>
      </div>
    </div>
  );
}

export default HomePage;
