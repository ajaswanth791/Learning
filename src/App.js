import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Body from './components/Body';
import Contact from './components/Contact';
import ErrorComponent from './components/ErrorComponent';
import HeadingComponent from './components/HeadingComponent';
import ResturantDetails from './components/ResturantDetails';
import UserCartClass from './components/UserCartClass';
// import Grocery from './components/Grocery';
import { lazy, Suspense, useEffect, useState } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
// import ShimmerCards from './components/ShimmerCards';

// const element = React.createElement("h1",{
//     id:"heading"
// },"Hello, world");
// console.log("element is ", element);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root is ", root);

// root.render(element);

/**
 * Now we need to create the nested html
 * 
 * <div id="parent">
 *     <div id="child">
 *          <h1>Hello, world!</h1>
 *     </div>
 * </div>
 * 
 */

// const parent = React.createElement(
//     "div",
//     {
//         id:"heading"
//     },
//     React.createElement(
//         "div",
//         {
//             id:"child"
//         },
//         React.createElement(
//             "h1",
//             {
//                 id:"h1"
//             },
//             "Hello, world!"
//         )
//     )
// );

// console.log("parent ", parent);

// JSX
// React Element
// const heading = <h1 id='heading'>Namaster Javascript </h1>
// console.log("heading is ", heading)
// to render react element - root.render(heading);

// React Component ( Capital Letter )
// root.render(<heading />)
// const Heading = () => {
//     return <h1 id="heading">Namamster React.</h1>
// };

// const Heading = () => <h1 id="heading">Namamster React.</h1>

// components composition - composing the one component to other

// const HeadingOne = () => <h1> First Component </h1>
// const Heading = () => {
//     return <div id="heading">
//         <HeadingOne />
//         <h1 id="heading">Namamster React.</h1>
//     </div>
// }


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading />);

// New Project Food Delivery App

/**
 * Headers - Logo Component, NavItems
 * Body - Search Input, Resturant Container
 * Footer - CopyRight, Links , Contract
 * https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/
*/


const Grocery = lazy(()=> import("./components/Grocery"));
const ShimmerCards = lazy(()=> import("./components/ShimmerCards"));




const AppLayout = () => {

    const [ userName, setUserName ] = useState();

    useEffect(() => {
        setUserName("Akshay Saini");
        console.log("userName ", userName);
        
    },[]);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ userLoggedIn: userName, setUserName }}>
                <div className='min-h-screen bg-[gainsboro]'>
                    <HeadingComponent />
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
    );
}

const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <AboutUs />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/resturant-details/:resId",
                element: <ResturantDetails />
            },
            {
                path:"/user-cart",
                element: <UserCartClass />
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<ShimmerCards />}><Grocery /></Suspense>
            },
        ],
        errorElement: <ErrorComponent />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRoutes}/>)
