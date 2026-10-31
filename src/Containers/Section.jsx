import { Media } from "../Components/Media";

export function Section({media, sectionHeader, description}){
    return(
        <div className="section-container">
            <div className="section-header">{sectionHeader}</div>
            <div>{description}</div>
            <div className="media-container">
                {media && media.map((m,i) => 
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