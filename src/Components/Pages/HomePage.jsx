import { Game } from "../../Game/Game";
import { CategoryBar } from "../../Components/CategoryBar";
import { appDevPreviewData, artPreviewData, gamesPreviewData, graphicsPreviewData, mlPreviewData } from "../../Data/PreviewData";
import { ProfileContainer } from "../../Containers/ProfileContainer";

export default function HomePage(){
    return(
        <div id="Home" className="top-container">
            <div className="inner-container">
                <ProfileContainer/>
                <div id="games"><CategoryBar header="Games" data={gamesPreviewData}></CategoryBar></div>
                <div id="graphics"><CategoryBar header="Computer Graphics & DataViz" data={graphicsPreviewData}></CategoryBar></div>
                <div id="ml"><CategoryBar header="ML/AI & Algorithms" data={mlPreviewData}></CategoryBar></div>
                <div id="appdev"><CategoryBar header="App Dev" data={appDevPreviewData}></CategoryBar></div>
                <div id="art"><CategoryBar header="Art & Graphic Design" data={artPreviewData}></CategoryBar></div>
                <Game></Game>
            </div>
        </div>
    )
}