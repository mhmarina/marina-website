export function Media({src, caption}){
    return(
    <div>
        <img src={src}/>
        <div>{caption}</div>
    </div>)
}