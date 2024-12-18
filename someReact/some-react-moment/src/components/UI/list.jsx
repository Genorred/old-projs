import React from "react";
import Post from "./Post.jsx";

export const List = ({ posts, delet }) => {
  if (!posts.length) {
    return <h1>there're nothing here</h1>
  }
  return (
    <div>
      {posts.map((post, index) =>
        <Post posts={post} number={index + 1} delet={delet} key={post.id} />
      )}
    </div>

  )
}
export default List