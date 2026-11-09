import { faDevpost, faGithub, faHuggingFace, faItchIo, faLinkedin, faReadme, faUnity, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping, faPaintBrush, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export function Link({domain, url, display, iconOnly}){
    const nameToSvg = {
        "github": faGithub,
        "youtube": faYoutube,
        "itch.io": faItchIo,
        "linkedin": faLinkedin,
        "redbubble": faCartShopping,
        "unity": faUnity,
        "readme": faReadme,
        "devpost": faDevpost,
        "link": faUpRightFromSquare,
        "huggingface": faHuggingFace,
        "art": faPaintBrush
    }
    
    return(
        <a href={url}>
            <div className="link-bar">
                <FontAwesomeIcon icon={domain ? nameToSvg[domain] : nameToSvg["link"]}/>
                {!iconOnly && 
                <>
                    {display ? display : domain}
                </>
                }
            </div>
        </a>
    )
}