import shrek from '../assets/game/shrek.png'; 
import "./styles/styles.css"

export function PreviewItem(props){
    return(
    <div class="preview-item">
        <img class="thumbnail" src={shrek}/>
        <div class="headline">HEADLINE</div>
        <div class="summary">SUMMARY</div>
    </div>)
}