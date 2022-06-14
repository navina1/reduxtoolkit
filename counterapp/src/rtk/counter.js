import {createSlice} from "@reduxjs/toolkit"
const initialState={
    value:0,
}
export const counter=createSlice({
    name:"c",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        }
    }
})

export const {increment,decrement}=counter.actions;
export default counter.reducer;