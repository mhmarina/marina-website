import { useState, useEffect, useRef } from "react"

export function Block(props){
    const [isAnimated, setIsAnimated] = useState(true)
    const [animationState, setAnimationState] = useState(-1)

    useEffect(() => {
        if(props.isGameOver){
            setAnimationState(0) 
        }
    }, [props.isGameOver]);

    useEffect(() => {
        // this is kind of a hack but we need to remove and then add the animator for us to "reset"
        // the animation. animState 0 = paused, 1 = anim toggled off, -1 = anim on 
        if(animationState == 0 && !props.isGameOver){ 
            setIsAnimated(false) 
            setAnimationState(1)
        }
        else if(animationState == 1){ 
            setIsAnimated(true)
            setAnimationState(-1)
        }
    }, [animationState, props.isGameOver])

    return(
        <div id="block"
            ref={props.ref}
            className={isAnimated ? "animated-block" : ""}
        ></div>
    )
}