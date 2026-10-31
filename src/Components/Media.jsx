export function Media({src, caption}){
    return(
    <div className="page-img-container">
        <img src={src}/>
        {caption &&
        <div className="caption">{caption}</div>}
    </div>)
}