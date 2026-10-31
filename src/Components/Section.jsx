import { Media } from "./Media";

export function Section({media, sectionHeader, description}){
    return(
        <div>
            <div className="section-header">{sectionHeader}</div>
            <div>{description}</div>
            <div className="media-container">
                {media.map((m,i) => 
                    <Media
                    key={i}
                    src={m["src"]}
                    caption={m["caption"]}
                    />
                )}
            </div>
        </div>
    )
}