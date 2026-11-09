import { FeatureLink } from "../Components/FeatureLinks";
import { Link } from "../Components/Link";
import { appDevPreviewData, artPreviewData, gamesPreviewData, mlPreviewData } from "../Data/PreviewData";

// home hero
export function ProfileContainer(){
    return(
        <div className="border-frame profile-container">
            <div className="profile-name">
                Marina Nasralla
            </div>
            <div className="link-container">
                <Link iconOnly domain="linkedin" url="https://www.linkedin.com/in/marina-nasralla/"/>
                <Link iconOnly domain="itch.io" url="https://mhmarina.itch.io/"/>
                <Link iconOnly domain="redbubble" url="https://www.redbubble.com/people/drawernotartist/shop"/>
                <Link iconOnly domain="art" url="https://mnasral2.myportfolio.com/work"/>
                <Link iconOnly domain="github" url="https://github.com/mhmarina"/>
            </div>
            <div className="summary">
                Hi, my name is Marina! I have a BS and a MS in CS from ASU! I am passionated about art and technology. I've worked as a professional Software Engineer at The Home Depot, Wells Fargo, ASU Enterprise Technology, and Smartsheet! Check out my projects across several domains, including art, VR, gaming, graphics, data and ML.
            </div>
            <div className="section-header">
                FEATURED
            </div>
            <div className="featured-img-container">
                <FeatureLink item={mlPreviewData.find(item => item.id == "marinagan")}/>
                <FeatureLink item={gamesPreviewData.find(item => item.id == "plastic-seas")}/>
                <FeatureLink item={artPreviewData.find(item => item.id == "animations")}/>
                <FeatureLink item={appDevPreviewData.find(item => item.id == "discord-trivia-bot")}/>
            </div>
        </div>
    )
}