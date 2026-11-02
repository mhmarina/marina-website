import { faDevpost, faGithub, faItchIo, faLinkedin, faReadme, faUnity, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Link({domain, url, display}){
    const nameToSvg = {
        "github": faGithub,
        "youtube": faYoutube,
        "itch.io": faItchIo,
        "linkedin": faLinkedin,
        "redbubble": faCartShopping,
        "unity": faUnity,
        "readme": faReadme,
        "devpost": faDevpost,
        "link": faUpRightFromSquare
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