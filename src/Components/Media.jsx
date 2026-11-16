export function Media({src, caption, hero, contain}){
    return(
    <div className="page-img-container border-frame">
        <img 
            src={`/marina-website${src}`}
            className={hero && "hero"}
            style={contain && {objectFit: "contain", objectPosition: "center"}}
        />
        {caption &&
        <div className="caption {}">{caption}</div>}
    </div>)
}