import { useEffect, useState } from 'react';

const useRestuants = () =>{

    const [restMenu, setRestMenu ] = useState(null);
    const [loader, setLoader ] = useState(true);
    

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const apiResponse = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await apiResponse.json();
        console.log("json is ", json);
        
        setRestMenu(json.data.cards[4]["card"]?.["card"]?.["gridElements"]?.["infoWithStyle"]?.["restaurants"]);
        setLoader(false);
    }

    return [restMenu , restMenu, loader , setRestMenu];
}

export default useRestuants;
