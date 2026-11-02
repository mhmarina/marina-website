export function IFrame({src}){
    return(
        <div className="border-frame">
            <iframe  className="iframe"
                src={src}
                allow="autoplay"
                loading="lazy"
                scrolling="no"
                >
            </iframe>
        </div>
    )
}