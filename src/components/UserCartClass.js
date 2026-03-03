// import React from "react";
// import UserContext from "../utils/UserContext";

import { useDispatch, useSelector } from "react-redux";
import { addItems, clearItems,cleanItems, removeItems } from "../utils/cartSlice";
import { Link } from "react-router-dom";

// class UserCartClass extends React.Component{
//     constructor(props){
//         super(props);
//         console.log("props ", props);

//         this.state = {
//             login: null,
//             type: "test"
//         }
//     }

//     componentDidMount = async () => {
//         const result = await fetch("https://api.github.com/users/akshaymarch7");
//         const json = await result.json();
//         console.log("result is ", json)
//         this.setState({
//             login: json.login,
//             // type: json.type
//         })
//         console.log("ths ", this.state);
//     }

//     componentDidUpdate() {
//         console.log("updated the done");
//     }

//     componentWillUnmount(){
//         console.log("will unmonunt");
//     }
    
    
//     render(){
        
//         const {name} = this.props;
//         console.log("namke is ", this.props, name);
         
//         return <div>
//             <h1>The User Cart Classes</h1>
//             <h2>{name}</h2>
//             <h2> {this.state.login}</h2>
//             <h2> --- {this.state.type}</h2>
//             <UserContext.Consumer>
//             {
//                 (data) => {                    
//                     return <h1>{data.userLoggedIn}</h1>
//                 }
//             }
//         </UserContext.Consumer>
//         </div>
//     }
// }

// export default UserCartClass;


const UserCartClass = () =>{

    const data = useSelector((store)=>{
        console.log("store is ", store);
        
        return store.cart
    });

    // console.log("data is ", data.items);
    // if(Object.keys(data.items).length == 0){
    //     console.log("worling");
    //     return <div>Testing</div>
    // }

    const dispatch = useDispatch();
    const removeCartItems = (name) => {
        dispatch(removeItems(name))
    }

    const addCartItems = (name) => {
        dispatch(addItems(name))
    }

    const clearCartItems = (name) => {
        dispatch(clearItems(name))
    }

    const clearCleanItems = () => {
        dispatch(cleanItems());
    };

    return <div className="flex flex-col bg-amber-100 p-5 items-center justify-evenly rounded-xl  shadow-2xl  w-6/12 mx-auto my-5">
        <span>Total Cart Items : {data.count} <button onClick={()=>clearCleanItems()}>Clear</button></span>
        {
            Object.keys(data.items).length == 0 ? <div
            className="font-bold">There are no items Here..<Link to="/">Click Here</Link></div> :
            Object.keys(data.items).map((res) => 
                <div key={res} className="flex flex-row gap-3 justify-evenly font-bold my-3">
                    <span>{res}</span>
                    <div key={res}>
                        <button onClick={()=>removeCartItems(res)} className="cursor-pointer mx-2  p-2">-</button>
                        <span className="p-2 mx-1 rounded-xs bg-gray-50">{data.items[res]}</span>
                        <button onClick={()=>addCartItems(res)} className="cursor-pointer mx-2  p-2">+</button>
                    </div>
                    <button className="cursor-pointer"
                    onClick={()=>clearCartItems(res)}
                    >Remove</button>
                </div>
            )
        }
    </div>
};

export default UserCartClass;
