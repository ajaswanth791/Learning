import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DUMMY_DATA } from "../utils/constants";
import ResturantAccordian from "./ResturantAccordian";

const ResturantDetails = () =>{
    const {resId} = useParams();

    const [restrurantDetails , setResturantDetails] = useState(DUMMY_DATA);
    const [clickedIndex, setClickedIndex] = useState(0);    

    useEffect(()=>{
        setResturantDetails(DUMMY_DATA);
    },[]);

    const result = restrurantDetails?.["data"]?.["cards"]?.[4]?.["groupedCard"]["cardGroupMap"]?.["REGULAR"]["cards"].filter(res => res.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");    

    // onClick={(event)=>{
    //             if (clickedIndex === ind){
    //                 setClickedIndex(-1)
    //             }else{
    //                 setClickedIndex(ind);
    //             }
    //            }}
    return <div>
        <h1 className="flex justify-center font-bold text-3xl my-3">{restrurantDetails?.data?.cards[0].card.card["text"]}</h1>
        {
            result.map((res, ind) => {               
               return <div key={res.card.card.categoryId} >
                <ResturantAccordian 
                    {...res.card.card} 
                    key={res.card.card.categoryId}
                    open={clickedIndex === ind ? true: false}
                    setClickedIndex={() => {
                        clickedIndex === ind ? setClickedIndex(-1) : setClickedIndex(ind)
                    }}
                />
               </div> 
            })
        }
    </div>
    
}

export default ResturantDetails;