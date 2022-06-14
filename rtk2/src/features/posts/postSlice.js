import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'1',title:'learning redux toolkit',content:'i have heard goodthings'},
    {id:'2',title:'Slices...',content:"i want pizza"}
]

const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        postAdded(state,action){
            state.push(action.payload)
        }
    }
})

export const selectAllPosts=(state)=>state.post;
export default postSlice.reducer;
export const {postAdded}=postSlice.actions;