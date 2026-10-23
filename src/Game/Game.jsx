import { useEffect, useState, useRef } from "react"
import { Block } from "./Block";
import { Player } from "./Player";
import "./styles/game.css"

export function Game(){
    const [isGameOver, setIsGameOver] = useState(false); //rerender UI
    const [score, setScore] = useState(0)

    const blockRef = useRef()
    const playerRef = useRef()
    const isGameOverRef = useRef(false); //constant outside of state; avoid stale closures
    const hasScoredRef = useRef(false); // constant to track scoring

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
        if(!isGameOverRef.current){updateScore(blockRef)}
        setTimeout(gameLoop, 10)
    }
    useEffect(() => gameLoop(), [])

    function gameOver(){
        isGameOverRef.current = true;
        setIsGameOver(true);
    }
    function gameStart(){
        isGameOverRef.current = false;
        setIsGameOver(false);
        setScore(0);
    }
    function checkCollision(refA, refB){
        const rectA = refA.current.getBoundingClientRect();
        const rectB = refB.current.getBoundingClientRect();
    return rectA.x < rectB.x + rectB.width && rectA.x + rectA.width > rectB.x
           && rectA.y < rectB.y + rectB.height && rectA.y + rectA.height > rectB.y
    }
    function updateScore(blockRef){
        const blockBounds = blockRef.current.getBoundingClientRect();
        if(blockBounds.x <= 20){
            if(!hasScoredRef.current){
                setScore(prev => prev + 1)
                hasScoredRef.current = true;
            }
        }
        else{
            hasScoredRef.current = false;
        }
    }

    return(
        <div id="game-container">
            Score: {score}
            <div id="game"
                className={isGameOver ? "game-over" : "game-start"}
            >
                <Block ref={blockRef} isGameOver={isGameOver}></Block>
                <Player ref={playerRef} isGameOver={isGameOver}></Player>
            </div>
        </div>
    )
}