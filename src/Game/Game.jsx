import { useEffect, useState, useRef } from "react"
import { Block } from "./Block";
import { Player } from "./Player";
import "./styles/game.css"
import { useLocalStorage } from "../Hooks/UseLocalStorage";
import dino from '/game/dino.png'; 
import shrek from '/game/shrek.png'; 
import tungtung from '/game/tungtung.png'; 
import hellokitty from '/game/hellokitty.png';

export function Game(){
    const [round, setRound] = useState(0); // Use to track rounds as well as key to remount/reset component
    const [isGameOver, setIsGameOver] = useState(false); //rerender UI
    const [score, setScore] = useState(0)
    const [isNewHighScore, setIsNewHighScore] = useState(false)
    const [charSprite, setCharSprite] = useState(dino)
    const {value: highscore, setValue: setHighScore} = useLocalStorage("high-score", 0)

    const blockRef = useRef()
    const playerRef = useRef()
    const isGameOverRef = useRef(false); //constant outside of state; avoid stale closures
    const hasScoredRef = useRef(false); // constant to track scoring

    useEffect(() => {
        if(score > highscore && isGameOver){
            setHighScore(score);
            setIsNewHighScore(true)
        }
        const handleKeyDown = (event) => {
            // restart game
            if(event.key == " " && isGameOver){
                gameStart()
                setRound(prev => prev+1)
            }
        }
        window.addEventListener("keydown", handleKeyDown);

        let gameloopTimeout;
        // gameloop!!
        const gameLoop = () => {
            if(checkCollision(blockRef, playerRef)){
                gameOver();
            }
            if(!isGameOverRef.current){updateScore()}
            gameloopTimeout = setTimeout(gameLoop, 10)
        }
        gameLoop();
        
        // cleanup function
        return() => {
            clearTimeout(gameloopTimeout)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isGameOver]) //isGameOver is a dependency -- setState "schedules" the change for NEXT render

    function gameOver(){
        isGameOverRef.current = true;
        setIsGameOver(true);
    }
    function gameStart(){
        isGameOverRef.current = false;
        setIsNewHighScore(false);
        setIsGameOver(false);
        setScore(0);
    }
    function checkCollision(refA, refB){
        if(!refA || !refB){return;}
        const rectA = refA.current.getBoundingClientRect();
        const rectB = refB.current.getBoundingClientRect();
    return rectA.x < rectB.x + rectB.width && rectA.x + rectA.width > rectB.x
           && rectA.y < rectB.y + rectB.height && rectA.y + rectA.height > rectB.y
    }
    function updateScore(){
        const blockBounds = blockRef.current.getBoundingClientRect()
        const blockX = blockBounds.x;
        const containerX = blockRef.current.parentElement.getBoundingClientRect().x;
        const relativeX = blockX - containerX;
        if(relativeX <= blockBounds.width){
            if(!hasScoredRef.current){
                randomizeBlockHeight()
                setScore(prev => prev + 1)
                hasScoredRef.current = true;
            }
        }
        else{
            hasScoredRef.current = false;
        }
    }
    // randomize blocks
    function randomizeBlockHeight(){
        const height = Math.random() * (35 - 20) + 20;
        blockRef.current.style.height = `${height}px`;
        blockRef.current.style.top = `${201-height}px`;
    }
    // handlers
    function onSwitchSprite(src){
        setCharSprite(src)
        playerRef.current.src = src
    }

    return(
        <div id="game-container" key={round}>
            <div>
                <div id="headline">
                    <h4>Score: {score}</h4>
                    <h4>High Score: {highscore}</h4>
                    <h4>Round: {round}</h4>
                </div>
                <div id="game"
                    className={isGameOver ? "game-over" : "game-start"}
                >
                    {isGameOver && 
                    <div id="game-over-overlay">
                        <h2>Game Over! Score: {score}</h2>
                        {isNewHighScore && <h2>NEW HIGH SCORE!</h2>}
                    </div>}
                    <Block ref={blockRef} isGameOver={isGameOver}></Block>
                    <Player ref={playerRef} isGameOver={isGameOver} charSprite={charSprite}></Player>
                </div>
                <button onClick={() => onSwitchSprite(shrek)}>
                    Shrek
                </button>
                <button onClick={() => onSwitchSprite(dino)}>
                    Dino
                </button>
                <button onClick={() => onSwitchSprite(tungtung)}>
                    Tung Tung Sahur
                </button>
                <button onClick={() => onSwitchSprite(hellokitty)}>
                    Hello Kitty
                </button>
            </div>
        </div>
    )
}