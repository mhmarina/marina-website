import { faGithub, faItchIo, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Link({domain, url, display}){
    const nameToSvg = {
        "github": faGithub,
        "youtube": faYoutube,
        "itch.io": faItchIo,
        "linkedin": faLinkedin
    }
    return(
        <div className="link-bar">
            <FontAwesomeIcon icon={domain && nameToSvg[domain]}/>
            <a href={url}>
                {display ? display : domain}
            </a>
        </div>
    )
}