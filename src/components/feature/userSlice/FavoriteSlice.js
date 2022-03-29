
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
       value:[
           {
            fave:[""],
            id:0
           } 
       ]
        
}

const favoriteSlice = createSlice({
    name:"fav",
    initialState,
    reducers:{
        addToFav (state, action) {
            state.value.push(action.payload)
        },
        remove (state,action){
            state.value = state.value.filter(p => p.id !== action.payload.id )
        }
    }
})

export const {addToFav,remove} = favoriteSlice.actions

export default favoriteSlice.reducer