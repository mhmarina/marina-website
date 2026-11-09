import { Game } from "../../Game/Game";
import { CategoryBar } from "../../Components/CategoryBar";
import { appDevPreviewData, artPreviewData, gamesPreviewData, graphicsPreviewData, mlPreviewData } from "../../Data/PreviewData";
import { ProfileContainer } from "../../Containers/ProfileContainer";
import { Divider } from "../Divider";
import { Navbar } from "../NavBar";

export default function HomePage(){
    return(
        <div>
            <Navbar/>
            <div id="Home" className="top-container">
                <div className="inner-container">
                    <div className="section-hero">
                        <ProfileContainer/>
                    </div>
                    <Divider variant="label" label="Projects"/>
                    <div id="games"><CategoryBar header="Games" data={gamesPreviewData}></CategoryBar></div>
                    <div id="graphics"><CategoryBar header="Computer Graphics & DataViz" data={graphicsPreviewData}></CategoryBar></div>
                    <div id="ml"><CategoryBar header="ML/AI & Algorithms" data={mlPreviewData}></CategoryBar></div>
                    <div id="appdev"><CategoryBar header="App Dev" data={appDevPreviewData}></CategoryBar></div>
                    <div id="art"><CategoryBar header="Art & Graphic Design" data={artPreviewData}></CategoryBar></div>
                    <Divider variant="sparkle"/>
                    <Game/>
                </div>
            </div>
        </div>
    )
}