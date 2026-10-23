import { useEffect, useState, useRef } from "react"
import { Block } from "./Block";
import { Player } from "./Player";
import "./styles/game.css"

export function Game(){
    const [isGameOver, setIsGameOver] = useState(false);
    const blockRef = useRef()
    const playerRef = useRef()

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

    // add condition for gameOver
    // if block pos.x <= player.width && !player.isAnimated
    // need to create a gameloop with a constant (hasCollided()) check.
    // maybe the game loop uses a timeout to constant call itself
    // function loop = checkCollision(); setTimeout(checkCollision(), 10)

    function gameLoop(){
        if(checkCollision(blockRef, playerRef)){
            setIsGameOver(true);
        }
        setTimeout(gameLoop, 10)
    }
    useEffect(() => gameLoop(), [])

    function checkCollision(refA, refB){
        const rectA = refA.current.getBoundingClientRect();
        const rectB = refB.current.getBoundingClientRect();
        
    return rectA.x < rectB.x + rectB.width && rectA.x + rectA.width > rectB.x
           && rectA.y < rectB.y + rectB.height && rectA.y + rectA.height > rectB.y
    }
    return(
        <div id="game-container">
            Score
            <div id="game"
                className={isGameOver ? "game-over" : "game-start"}
            >
                <Block ref={blockRef} isGameOver={isGameOver}></Block>
                <Player ref={playerRef} isGameOver={isGameOver}></Player>
            </div>
        </div>
    )
}