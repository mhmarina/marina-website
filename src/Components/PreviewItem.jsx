import { NavLink } from 'react-router-dom';
import shrek from '/game/shrek.png'; 
import "./styles/styles.css"

export function PreviewItem({item}){
    return(
    <NavLink to={`projects/${item.id}`}>
        <div class="preview-item">
            <img class="thumbnail" src={item.imgsrc ? item.imgsrc : shrek}/>
            <div class="text-container">
                <div class="headline">{item.headline}</div>
                <div class="summary">{item.summary}</div>
            </div>
        </div>
    </NavLink>
)
}