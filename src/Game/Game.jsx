import { Block } from "./Block";
import { Player } from "./Player";
import "../styles/game.css"

export function Game(){
    return(
        <div id="game-container">
            Score
            <div id="game">
                <Block></Block>
                <Player></Player>
            </div>
        </div>
    )
}