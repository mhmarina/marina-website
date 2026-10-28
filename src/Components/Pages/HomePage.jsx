import { Game } from "../../Game/Game";
import { CategoryBar } from "../../Components/CategoryBar";
import { appDevPreviewData, artPreviewData, gamesPreviewData, graphicsPreviewData, mlPreviewData } from "../../Data/PreviewData";

export default function HomePage(){
    return(
        <div id="Home" class="container">
            ver 10/27:1
            <Game></Game>
            <CategoryBar header="Games" data={gamesPreviewData}></CategoryBar>
            <CategoryBar header="Graphics" data={graphicsPreviewData}></CategoryBar>
            <CategoryBar header="ML/AI" data={mlPreviewData}></CategoryBar>
            <CategoryBar header="App Dev" data={appDevPreviewData}></CategoryBar>
            <CategoryBar header="Art & Graphic Design" data={artPreviewData}></CategoryBar>
        </div>
    )
}