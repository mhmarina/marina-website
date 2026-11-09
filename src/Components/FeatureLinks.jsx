import { NavLink } from 'react-router-dom';

export function FeatureLink({item}){
    return(
        <NavLink to={`projects/${item.id}`}>
            <div className="feature-img-wrapper">
                <img
                    src={item.imgsrc}
                />
            </div>
            <div className="feature-headline">
                {item.headline}
            </div>
        </NavLink>
    )
}