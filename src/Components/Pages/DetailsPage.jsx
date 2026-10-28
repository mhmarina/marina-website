import { useParams } from "react-router-dom";

export function DetailsPage(){
    const { id } = useParams()
    return(
        <div className="top-container" id="Details">Details: {id}</div>
    )
}