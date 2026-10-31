export function Link({domain, url, display}){
    return(
        <div>
            <a href={url}>
                {display ? display : domain}
            </a>
        </div>
    )
}