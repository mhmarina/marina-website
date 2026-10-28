import { PreviewItem } from '../Components/PreviewItem'
import './styles/styles.css'
import { previewData } from '../Data/PreviewData';

export function GridContainer({items}){
    return(
    <div class="grid-container">
        {previewData.map((item) => 
            <PreviewItem
                item={item}
                kry={item.id}
            />
        )}
    </div>
    )
}