export function Media({src, caption, hero}){
    return(
    <div className="page-img-container">
        <img 
            src={`/marina-website/${src}`}
            className={hero && "hero"}
        />
        {caption &&
        <div className="caption {}">{caption}</div>}
    </div>)
}