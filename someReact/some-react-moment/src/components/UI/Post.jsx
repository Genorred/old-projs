import React from 'react';
import '../../App.css';
import MyButton from './Button/MyButton';
import { useNavigate } from 'react-router-dom';

export function Post({ posts, number, delet }) {
    const router = useNavigate()
    let likes = `${'+'} ${posts.likes}`
    let dislikes = `${'+'} ${posts.dislikes}`

    const deletePostP = () => {
        delet(number - 1)
    }

    return (
        <div className='post'>
            <div>
                <h2>{posts.id} {posts.title}</h2>
                <p>{posts.body}</p>
            </div>
            <div className='flex'>
                <p>{likes}</p>
                <p>{dislikes}</p>
            </div>
            <MyButton onClick={() => router(`/posts/${posts.id}`)}> Open </MyButton>
            <MyButton onClick={deletePostP}> Delete </MyButton>
        </div>
    )
}
export default Post