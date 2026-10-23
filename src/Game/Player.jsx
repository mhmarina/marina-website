import { useEffect, useState } from "react"

export function Player(){
    const [isAnimated, setIsAnimated] = useState(false)

    useEffect(() => {
        // defining this method here because the fact
        // that it's called in useEffect implicitly makes it a dependency
        // if defined outside (without useCallback()) it will rerender 
        // on every render, which will trigger this useEffect. TIL
        const handleKeyDown = (event) => {
            if(event.key == " "){
                if(!isAnimated){
                    setIsAnimated(true);
                    setTimeout(() => {
                        setIsAnimated(false);
                    }, 250)
                }
            }
        }
        window.addEventListener("keydown", handleKeyDown);

        // cleanup function
        return() => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    return(
        <div 
            id="player"
            // add/remove class based on state
            className={isAnimated ? "animated" : ""}
        >
        </div>
    )
}