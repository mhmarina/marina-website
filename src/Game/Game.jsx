import { useEffect, useState, useRef } from "react"
import { Block } from "./Block";
import { Player } from "./Player";
import "./styles/game.css"
import { useLocalStorage } from "../Hooks/UseLocalStorage";

export function Game(){
    const [isGameOver, setIsGameOver] = useState(false); //rerender UI
    const [score, setScore] = useState(0)
    const {value: highscore, setValue: setHighScore, error: highscoreError} = useLocalStorage("high-score", 0)

    const blockRef = useRef()
    const playerRef = useRef()
    const isGameOverRef = useRef(false); //constant outside of state; avoid stale closures
    const hasScoredRef = useRef(false); // constant to track scoring

    useEffect(() => {
        const handleKeyDown = (event) => {
            // restart game
            if(event.key == " " && isGameOver){
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
        if(!isGameOverRef.current){
            isGameOverRef.current = true;
            setIsGameOver(true);
        }
    }
    function gameStart(){
        isGameOverRef.current = false;
        if(score >= highscore){
            setHighScore(score);
        }
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
        const blockBounds = blockRef.current.getBoundingClientRect()
        const blockX = blockBounds.x;
        const containerX = blockRef.current.parentElement.getBoundingClientRect().x;
        const relativeX = blockX - containerX;
        if(relativeX <= blockBounds.width){
            if(!hasScoredRef.current){
                setScore(prev => prev + 1)
                hasScoredRef.current = true;
            }
        }
        else{
            hasScoredRef.current = false;
        }
    }

    // handlers
    function onSwitchSprite(src){
        playerRef.current.src = src
    }

    return(
        <div id="game-container">
            <div>
                <div id="headline">
                    <h4>Score: {score}</h4>
                    <h4>Hight Score: {highscore}</h4>
                </div>
                <div id="game"
                    className={isGameOver ? "game-over" : "game-start"}
                >
                    {isGameOver && 
                    <div id="game-over-overlay">
                        <h2>Game Over! Score: {score}</h2>
                    </div>}
                    <Block ref={blockRef} isGameOver={isGameOver}></Block>
                    <Player ref={playerRef} isGameOver={isGameOver}></Player>
                </div>
                <button onClick={() => onSwitchSprite("./src/Game/assets/shrek.png")}>
                    Shrek
                </button>
                <button onClick={() => onSwitchSprite("./src/Game/assets/dino.png")}>
                    Dino
                </button>
                <button onClick={() => onSwitchSprite("./src/Game/assets/tungtung.png")}>
                    Tung Tung Sahur
                </button> {/* maybe button should be a component */}
            </div>
        </div>
    )
}