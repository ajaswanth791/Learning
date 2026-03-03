// import { useState } from "react";
import { useContext, useState } from "react";
import { useSelector } from 'react-redux';


import { Link } from 'react-router-dom';
import { CDN_URL } from "../utils/constants";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";

const HeadingComponent = () => {
    const [buttonName, setButtonName] = useState("Login");

    const online = useInternetStatus();

    const { userLoggedIn } = useContext(UserContext);

    const cartSliceData = useSelector((store)=>store.cart.count);
    console.log("cartSLice Data si ", cartSliceData);
    

    return (
        <div className="flex bg-[#d59450] h-30 w-full mb-2 p-2 max-w-full max-h-full align-middle justify-between shadow-2xl sticky top-0">
            <div className='mix-blend-multiply cursor-pointer max-h-full'>
                <img className="max-h-full w-30" src={CDN_URL}/>
            </div>
            <div className='flex items-center justify-between mr-1'>
                <ul className='flex items-center justify-between w-200 max-w-full'>
                    <li>Online Status : <span className={`inline-block rounded-[50%] w-3.5 h-3.5 ${online ? "bg-green-300"  : "bg-red-300"}`}></span></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/user-cart" className="font-bold text-10">Cart ({cartSliceData} items)</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="bg-gray-50 p-2 rounded-sm hover:cursor-pointer" onClick={() => (
                        buttonName === "Login" ? setButtonName("LogOut") : setButtonName("Login")
                    )
                    }>{buttonName}</button>
                    <li>{userLoggedIn}</li>
                </ul>
            </div>
        </div>
    );
};

export default HeadingComponent;