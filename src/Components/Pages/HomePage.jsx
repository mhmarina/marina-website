import { Game } from "../../Game/Game";
import { CategoryBar } from "../../Components/CategoryBar";
import { appDevPreviewData, artPreviewData, gamesPreviewData, graphicsPreviewData, mlPreviewData } from "../../Data/PreviewData";

export default function HomePage(){
    return(
        <div id="Home" className="top-container"
        // style={{ display: "flex", alignItems: "flex-start" }}
        >
            {/* <div style={{ flex: 1 }}> */}
                ver 10/30:1
                <Game></Game>
                <div id="games"><CategoryBar header="Games" data={gamesPreviewData}></CategoryBar></div>
                <div id="graphics"><CategoryBar header="Computer Graphics & DataViz" data={graphicsPreviewData}></CategoryBar></div>
                <div id="ml"><CategoryBar header="ML/AI" data={mlPreviewData}></CategoryBar></div>
                <div id="appdev"><CategoryBar header="App Dev" data={appDevPreviewData}></CategoryBar></div>
                <div id="art"><CategoryBar header="Art & Graphic Design" data={artPreviewData}></CategoryBar></div>
            {/* </div> */}

            {/* factor out into navbar component and make it show on top (or just remove it on mobile, we like to scroll anyway)
            <nav style={{ position: "sticky", top: 0, width: "200px", height: "100vh", background: "black", display: "flex", flexDirection: "column", gap: "16px", padding: "24px" }}>
                <a href="#games" style={{ color: "white", textDecoration: "none" }}>Games</a>
                <a href="#graphics" style={{ color: "white", textDecoration: "none" }}>Graphics</a>
                <a href="#ml" style={{ color: "white", textDecoration: "none" }}>ML/AI</a>
                <a href="#appdev" style={{ color: "white", textDecoration: "none" }}>App Dev</a>
                <a href="#art" style={{ color: "white", textDecoration: "none" }}>Art & Graphic Design</a>
            </nav> */}
        </div>
    )
}