import { NavLink } from 'react-router-dom';
import shrek from '/game/shrek.png'; 
import "./styles/styles.css"

export function PreviewItem({item}){
    return(
    <NavLink to={`projects/${item.id}`}>
        <div className="preview-item">
            <img className="thumbnail" src={item.imgsrc ? item.imgsrc : shrek}/>
            <div className="text-container">
                <div className="headline">{item.headline}</div>
                <div className="summary">{item.summary}</div>
            </div>
        </div>
    </NavLink>
)
}