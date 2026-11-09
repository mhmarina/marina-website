import { Link } from "../Components/Link";

// home hero
export function ProfileContainer(){
    return(
        // TODO: Optional profile Image
        <div className="border-frame" style={{padding: "10px", display: "flex", gap: "10px", flexDirection: "column", width: "min(95%, 700px)", alignSelf: "center"}}>
            <div className="page-header" style={{fontSize: "30px", lineHeight: "30px"}}>
                Marina Nasralla
            </div>
            <div style={{display: "flex"}}>
                <Link iconOnly domain="linkedin" url="https://www.linkedin.com/in/marina-nasralla/"/>
                <Link iconOnly domain="itch.io" url="https://mhmarina.itch.io/"/>
                <Link iconOnly domain="redbubble" url="https://www.redbubble.com/people/drawernotartist/shop"/>
                <Link iconOnly domain="art" url="https://mnasral2.myportfolio.com/work"/>
                <Link iconOnly domain="github" url="https://github.com/mhmarina"/>
            </div>
            <div>
                this is my description! All about me me me me!
            </div>
            <div className="section-header" style={{fontSize: "24px"}}>
                FEATURED
            </div>
            <div style={{ display: "grid", gap: "10px 20px", gridTemplateColumns: "repeat(auto-fill, 100px)"}}>
                <div  style={{height: "100px", width: "100px", border: "5px solid black"}}>
                    <img
                        style={{height: "inherit", width: "inherit", objectFit: "cover"}}
                        src="./details/sdfc-marketing/flyers.png"
                    />
                </div>
                <div style={{height: "100px", width: "100px", border: "5px solid black"}}>
                    <img
                        style={{height: "inherit", width: "inherit", objectFit: "cover"}}
                        src="./details/sdfc-marketing/flyers.png"
                    />
                </div>                
                <div  style={{height: "100px", width: "100px", border: "5px solid black"}}>
                    <img
                        style={{height: "inherit", width: "inherit", objectFit: "cover"}}
                        src="./details/sdfc-marketing/flyers.png"
                    />
                </div>
            </div>
        </div>
    )
}