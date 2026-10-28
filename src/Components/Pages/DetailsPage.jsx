import { useParams } from "react-router-dom";

export function DetailsPage(){
    const { id } = useParams()
    return(
        <div id="Details">Details: {id}</div>
    )
}