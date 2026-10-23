import { useEffect, useState, useRef } from "react"

export function Player(props){
    const [isAnimated, setIsAnimated] = useState(false)
    const isGameOverRef = useRef(props.isGameOver);
      const timeoutRef = useRef(null);

    useEffect(() => {
        // Keep the ref in sync with the latest prop
        isGameOverRef.current = props.isGameOver;
        // When the game restarts (true -> false), reset the animation
        if (!props.isGameOver) {
            clearTimeout(timeoutRef.current);
            setIsAnimated(false);
        }
    }, [props.isGameOver]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if(event.key == " "){
                if(!isAnimated){
                    setIsAnimated(true);
                    timeoutRef.current = setTimeout(() => {
                        if(!isGameOverRef.current){
                            setIsAnimated(false);
                        }
                    }, 250)
                }
            }
        }
        window.addEventListener("keydown", handleKeyDown);
        // cleanup function
        return() => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [isAnimated])

    return(
        // <img id="player" className={isAnimated ? "animated-player" : ""} src="https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"></img>

        <div 
            id="player"
            // add/remove class based on state
            className={isAnimated ? "animated-player" : ""}
            ref={props.ref}
        >
        </div>
    )
}