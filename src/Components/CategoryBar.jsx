import { GridContainer } from "../Containers/GridContainer";

export function CategoryBar({header, data}){
    return(
        <div className="category-bar home-section-header">
            {header}
            <GridContainer data={data}></GridContainer>
        </div>
    )
}