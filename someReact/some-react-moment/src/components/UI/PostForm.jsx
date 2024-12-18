import React, { useState } from "react";
import MyButton from "./Button/MyButton";
import MyInput from "./Input/MyInput";

export const PostForm = ({ create }) => {

  const [post, setPost] = useState({ title: '', comment: '' })
  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    create(newPost)
    setPost({ title: '', comment: '' })
  }
  return (<form>
    <MyInput
      placeholder='enter comment'
      value={post.comment}
      onChange={
        (e) => { setPost({ ...post, comment: e.target.value }) }
      } />
    <MyInput placeholder='enter title' value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
    <MyButton onClick={addNewPost} >add new post</MyButton>
  </form>)
}
export default PostForm