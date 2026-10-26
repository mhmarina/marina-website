import { useState, useEffect, useRef } from "react"

export function Block(props){
    const [key, setKey] = useState(0)

    useEffect(() => {
        if(!props.isGameOver){
            setKey(prev => prev+1) //reset key to reload component, resets animation
        }
    }, [props.isGameOver]);

    return(
        <div id="block"
            ref={props.ref}
            className="animated-block"
            key={key}
        ></div>
    )
}