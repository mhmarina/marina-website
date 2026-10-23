import { useEffect, useState, useRef } from "react"
import { Block } from "./Block";
import { Player } from "./Player";
import "./styles/game.css"

export function Game(){
    const [isGameOver, setIsGameOver] = useState(false);
    const [socre, setScore] = useState(0)
    const blockRef = useRef()
    const playerRef = useRef()

    useEffect(() => {
        const handleKeyDown = (event) => {
            // restart game
            if(event.key == "n" && isGameOver){
                gameStart()
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        // cleanup function
        return() => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isGameOver]) //isGameOver is a dependency -- setState "schedules" the change for NEXT render

    // game loop!!
    function gameLoop(){
        if(checkCollision(blockRef, playerRef)){
            gameOver();
        }
        // check if block made it thru
        setTimeout(gameLoop, 10)
    }
    useEffect(() => gameLoop(), [])

    function checkCollision(refA, refB){
        const rectA = refA.current.getBoundingClientRect();
        const rectB = refB.current.getBoundingClientRect();
        
    return rectA.x < rectB.x + rectB.width && rectA.x + rectA.width > rectB.x
           && rectA.y < rectB.y + rectB.height && rectA.y + rectA.height > rectB.y
    }

    function gameOver(){
        setIsGameOver(true);
    }

    function gameStart(){
        setIsGameOver(false);
        setScore(0);
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