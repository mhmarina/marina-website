import { useEffect, useState } from "react"
import { Block } from "./Block";
import { Player } from "./Player";
import "../styles/game.css"

export function Game(){
    const [isGameOver, setIsGameOver] = useState(false);
    useEffect(() => {
        const handleKeyDown = (event) => {
            if(event.key == "n"){
                // we cant do this vv because isGameOver is "cached" in this function
                // since it's only "rendered" once (since it's in use effect)
                // so we must use prev.
                // setIsGameOver(!isGameOver);
                setIsGameOver(prev => !prev);
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        // cleanup function
        return() => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isGameOver]) //isGameOver is a dependency -- setState "schedules" the change for NEXT render

    return(
        <div id="game-container">
            Score
            <div id="game"
                className={isGameOver ? "game-over" : "game-start"}
            >
                <Block isGameOver={isGameOver}></Block>
                <Player isGameOver={isGameOver}></Player>
            </div>
        </div>
    )
}