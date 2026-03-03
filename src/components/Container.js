import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const Container = (data) =>{
    
    const {
        cloudinaryImageId,
        aggregatedDiscountInfoV3,
        name,
        avgRatingString,
        cuisines,
        sla,
        locality
    } = data;

    const { userLoggedIn } = useContext(UserContext);
    

    return (
        <div className='w-2xs p-5 h-2xl'>
            <img src={LOGO_URL+ cloudinaryImageId} alt="Not Found" className='h-60 max-h-60 w-60 max-w-60'/>
            <span className='font-bold'>{aggregatedDiscountInfoV3?.header+" " + aggregatedDiscountInfoV3?.subHeader}</span>
            <div className='container-details'>
                <span style={{fontWeight: 'bolder'}}>{name}</span>
                <span>{avgRatingString} {sla.slaString}</span>
                <span>{cuisines.join(", ")}</span>
                <span>{locality}</span>
                <span>{userLoggedIn}</span>
            </div>
        </div>
    );
}

export const withPromotionContainers = (ResturantContainer) =>{
    return (props) =>  <div>
        <label className="bg-black w-4 text-white p-2 rounded-md">Promoted</label>
        <ResturantContainer {...props} />
    </div>
};

export default Container;