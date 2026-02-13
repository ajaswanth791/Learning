import React from 'react';
import ReactDOM from 'react-dom/client';

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

const parent = React.createElement(
    "div",
    {
        id:"heading"
    },
    React.createElement(
        "div",
        {
            id:"child"
        },
        React.createElement(
            "h1",
            {
                id:"h1"
            },
            "Hello, world!"
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);