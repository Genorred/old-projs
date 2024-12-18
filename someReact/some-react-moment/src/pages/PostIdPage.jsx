import React from 'react'
import { useParams } from 'react-router-dom'
import useFetching from '../hooks/useFetching';
import PostService from '../API/PostService';
import { useState } from 'react';
import { useEffect } from 'react';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [postComments, setPostComments] = useState([])

    const [fetchPostById, postIsLoading, postError] = useFetching(async () => {
        const response = await PostService.getPostById(params.id)
        setPost(response.data)
    })

    const [fetchPostCommentsById, postIsCommentsLoading, postCommentsError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setPostComments(response.data)
    })

    useEffect(() => {
        fetchPostById()
        fetchPostCommentsById()
    }, [])
    console.log(postComments)
    console.log(postComments[0])
    return (
        <div>
            <h1>you on a post page with an Id = {params.id}</h1>
            {postIsLoading && postIsCommentsLoading
                ? <h1>post is loading</h1>
                : <div>
                    <h3>
                        {post.id}. {post.title}
                        </h3>
                        <h1>
                            Comments
                        </h1>
                        {postComments.map( (com, index) => {
                          return <div key={com.id}>
                            <h1>{index + 1}  {com.email}</h1>
                            <h4>{com.body}</h4>
                             </div> 
                        })}
                </div>
            }
        </div>
    )
}

export default PostIdPage
