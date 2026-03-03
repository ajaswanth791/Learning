import { useContext, useEffect, useState } from "react";
import Container ,{withPromotionContainers} from "./Container";
import ShimmerCards from "./ShimmerCards";
import { Link } from "react-router-dom";
import useRestuants from "../utils/useResturants";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
    // const [listOfResturant, setListofResturant] = useState([]);
    // const [listOfResturantClone, setListofResturantClone] = useState([]);
    // const [spinningLoader, setSpinningLoader] = useState(true);
    const insternetStatus = useInternetStatus();

    
    const [searchValue , setSearchValue] = useState("");

    console.log("out side insdie body")

    // let listOfResturant = null
    // let listOfResturantClone = null;
    const [ listOfResturant, listOfResturantClone, spinningLoader, setListofResturant ]= useRestuants();
    const RestruarntWithPromotion = withPromotionContainers(Container);

    // listOfResturantClone = json.
    // if (listOfResturant !== null){
    //     setSpinningLoader(false);
    // }

    console.log("spinningLoader ", spinningLoader);
    console.log("spinningLoader ", listOfResturantClone);
    console.log("listOfResturant ", listOfResturant);

    const { userLoggedIn, setUserName } = useContext(UserContext);
    

    // useEffect(()=>{

    //     console.log("json is ", json);

    //     if (json !== null){
    //         console.log("ddd ");;
            
    //         // setListofResturant(json.data.cards[4]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"]);
    //         // setListofResturantClone(json.data.cards[4]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"]);
    //     }
    // },[])

    

    // useEffect

    // useEffect( ()=>{
    //     console.log("inside the useeffect");
    //     fetchResturants();
    // }, []);

    // const fetchResturants = async () =>{
        
    //     const apiResponse = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     // const apiResponse = await fetch("https://www.swiggy.com/dapi/restaurants/list/update");        
    //     const json = await apiResponse.json();
    //     setListofResturant(json.data.cards[4]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"]);
    //     setListofResturantClone(json.data.cards[4]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"]);
    //     setSpinningLoader(false);
    // }

    if (insternetStatus === false){
        console.log("dddd internet ");
        return <h1>Please check your internet Conenction!</h1>
    }

    return spinningLoader ? <ShimmerCards /> : (
        <div className="flex wrap-break-word flex-col">
            <div className='flex bg-amber-100 max-h-18 h-18 items-center justify-evenly shadow-2xl mb-2'>
                <div className="flex items-center wrap-normal gap-2 p-2">
                    <input
                        className="h-9 rounded-md pl-2 font-light font-serif bg-white w-md outline-0 text-2xl" 
                        type="text" value={searchValue} onChange={(e)=>{
                        setSearchValue(e.target.value)
                        console.log("value is ", searchValue);
                    }}/>
                    <button
                     className="p-5 bg-gray-100 rounded-md h-1 flex items-center cursor-pointer"
                     onClick={()=>{
                        console.log("listOfResturantClone ", listOfResturantClone);
                        
                        const filteredResturants = listOfResturantClone.filter((record) => record.info.name.toLowerCase().includes(searchValue.toLowerCase()))
                        console.log("filteredResturants ",searchValue, filteredResturants);
                        setListofResturant(filteredResturants);
                     }} 
                    >Search</button>
                </div>
                <button
                className="cursor-pointer bg-gray-50 rounded-md p-3" 
                onClick={()=>{
                    const filteredResturants = listOfResturant.filter((record) => record.info.avgRating > 4);
                    setListofResturant(filteredResturants);
                }}>Top Rated Restaurant</button>
                <input
                        className="h-9 rounded-md pl-2 font-light font-serif bg-white w-md outline-0 text-2xl" 
                        type="text" 
                        value={userLoggedIn} 
                        onChange={(e)=>{
                            setUserName(e.target.value)
                            console.log("value is ", userLoggedIn);
                        }}
                />
            </div>
            <div className='flex flex-row flex-wrap'>
                {
                    listOfResturant.map((resturant)=>(    
                        <Link className="m-2 bg-[antiquewhite] shadow-2xl" to={"/resturant-details/" + resturant.info.id}  key={resturant.info.id}>
                            {
                                resturant.info.isOpen ? <RestruarntWithPromotion {...resturant?.info} key={resturant.info.id}/>: <Container {...resturant?.info} key={resturant.info.id}/>
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;