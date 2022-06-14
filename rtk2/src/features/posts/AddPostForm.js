import { useState } from "react";
import React from 'react'
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postSlice";

function AddPostForm() {
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const onTitleChanged= e =>setTitle(e.target.value);
  const onContentChanged= e =>setContent(e.target.value);
  const dispatch=useDispatch()
  const onSavePostClicked= ()=>{
    if( title && content){
        dispatch(
            postAdded({
                id:nanoid,
                title,
                content
            })
        )
        setTitle('')
        setContent('')
    }
  }

  return(
    <section>
        <h2>Add a new post</h2>
        <form>
            <label htmlFor="postTittle">Post Title:</label>
            <input
                type="text"
                id="postTittle"
                name="postTittle"
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="postContent">content</label>
            <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
            />
            <button type="button" onClick={onSavePostClicked}>Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm