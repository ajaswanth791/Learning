import ResturantCategory from "./ResturantCategory";

const ResturantAccordian = ({open, categories, title, setClickedIndex}) =>{
    return <>
        <div 
            className="bg-[darkgrey] w-6/12 flex flex-row mx-auto align-middle p-4 justify-between shadow-2xs cursor-pointer rounded-2xl my-1"
            onClick={()=>{
                setClickedIndex()
            }}
        >
            <span className="text-2 font-semibold">{title}</span>
            <span>{open ? "-" : "+"}</span>
        </div>
        {open && <ResturantCategory data = {categories}/>}
    </>
};

export default ResturantAccordian;