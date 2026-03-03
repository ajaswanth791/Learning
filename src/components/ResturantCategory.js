import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ResturantCategory = (props) => {
    // const {title} = props[0];
    // categories
    const { data } = props
    console.log("data us ResturantCategory ",data);

    const dispatch = useDispatch()

    const handleCartItems = (name) => { 
        dispatch(addItems(name))
    }



    return <div>
        {
            data.map((res)=><div className="mx-auto align-middle p-4 cursor-pointer bg-amber-100 w-6/12 flex flex-col justify-start my-2 rounded-2xl shadow-2xs" key={res.categoryId}>
                <span className="font-bold text-20">{res.title}</span>
                <hr></hr>
                {
                    res.itemCards.map((data)=><div className="group flex flex-row " key={data.card.info.id}>
                        {data.card.info.name}
                        <button 
                         onClick={()=>handleCartItems(data.card.info.name)}
                        className="hidden group-hover:block group-hover:px-5 group-hover:mx-2 group-hover:bg-black group-hover:rounded-2xl group-hover:text-white cursor-pointer">Add</button>
                    </div>)
                }
            </div>
            )
        }
    </div>
};

export default ResturantCategory;