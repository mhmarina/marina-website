import { GridContainer } from "../Containers/GridContainer";

export function CategoryBar({header, data}){
    return(
        <div className="category-bar section-header">
            {header}
            <GridContainer data={data}></GridContainer>
        </div>
    )
}