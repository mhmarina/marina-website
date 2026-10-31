import { Media } from "./Media";

export function Section({media, sectionHeader, description}){
    return(
        <div>
            {sectionHeader}
            <></>
            {description}
            {media.map((m,i) => 
                <Media
                 key={i}
                 src={m["src"]}
                 caption={m["caption"]}
                />
            )}
        </div>
    )
}