import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items:{},
        count: 0
    },
    reducers:{
        addItems: (state, action) =>{
            // state.items.push(action.payload);
            // state.items.get(action.payload,0) += 1;
            state.items[action.payload] = (state.items[action.payload] || 0) + 1; 
            state.count += 1;
            console.log("state ", state.count, state.items);
            
        },
        removeItems: (state, action) =>{
            console.log("data is ", state, action);
            
            state.items[action.payload] -= 1
            state.count -= 1;
            if(state.items[action.payload] <= 0){
               delete state.items[action.payload];
            }
            
        },
        clearItems: (state, action) =>{
            state.count -= state.items[action.payload];
            delete state.items[action.payload]
        },
        cleanItems: (state, action) =>{
            console.log("hitting ");
            
            state.items = {};
            state.count = 0
        }
    }
});

export const { addItems, removeItems, clearItems , cleanItems } = cartSlice.actions;

export default cartSlice.reducer;


