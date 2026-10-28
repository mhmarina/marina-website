import { GridContainer } from "../Containers/GridContainer";

export function CategoryBar({header, data}){
    return(
        <div class="category-bar">
            {header}
            <GridContainer data={data}></GridContainer>
        </div>
    )
}