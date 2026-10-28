import { PreviewItem } from '../Components/PreviewItem'
import './styles/styles.css'

export function GridContainer({data}){
    return(
    <div class="grid-container">
        {data.map((item) => 
            <PreviewItem
                item={item}
                kry={item.id}
            />
        )}
    </div>
    )
}