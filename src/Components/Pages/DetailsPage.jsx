import { useParams } from "react-router-dom";
import { detailData } from "../../Data/DetailData";
import { UnderConstructionPage } from "./UnderConstructionPage";
import { Section } from "../Section";
import { Link } from "../Link";
import { Media } from "../Media";

export function DetailsPage(){
    const { id } = useParams()
    const data = detailData[id]
    return(
        <div className="top-container" id="Details">
            {data ? <div>
                <div className="page-header">{data["header"]}</div>
                {data["hero"] && data["hero"].map((h) => 
                    <Media
                        src={h["src"]}
                        caption={h["caption"]}
                        hero={true}
                    />
                )}
                {data["links"] && data["links"].map((l,i) => 
                <Link
                    key={i}
                    domain={l["domain"]}
                    display={l["display"]}
                    url={l["url"]}
                />)}
                <div>{data["description"]}</div>
                {data["sections"] && data["sections"].map((s,i) =>
                <Section
                    key={i}
                    media={s["media"]}
                    sectionHeader={s["sectionHeader"]}
                    description={s["description"]}
                />)}
            </div> : <UnderConstructionPage/>}
        </div>
    )
}