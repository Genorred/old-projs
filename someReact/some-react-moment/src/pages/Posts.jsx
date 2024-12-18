



import useFetching from '../hooks/useFetching.js'
import usePosts from '../hooks/usePosts.js'
import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import MyButton from '../components/UI/Button/MyButton.jsx'
import MyModal from '../components/UI/MyModal/MyModal.jsx'
import PostFilter from '../components/PostFilter.jsx'
import Loader from '../components/UI/Loader/Loader.jsx'
import List from '../components/UI/list.jsx'
import Pagination from '../components/UI/pagination/pagination.jsx'
import PostService from '../API/PostService.js'
import PostForm from '../components/UI/PostForm.jsx'
import { getPagesCount } from '../utils/pages.js';
import useObserver from '../hooks/useObserver.js';
function Posts() {
    let headers
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            headers = response.headers.get("Content-type")
            return response.json()
        })
        .then(json => console.log(json, headers))
    let [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)


    const [fetchPosts, arePostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

const lastElement = useRef()
 useObserver(lastElement, page < totalPages, arePostsLoading, () =>setPage(page + 1))


    useEffect(() => { fetchPosts() },
        [page])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const deletePost = (number) => {
        posts.splice(number, 1)
        setPosts([...posts])
    }
    const [modal, setModal] = useState(false)
    return (
        <div>
            <MyButton style={{ marginTop: 30 }} onClick={() => { setModal(true) }}>add post</MyButton>

            <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} /></MyModal>
            <hr style={{ margin: '15px 0' }} />
            <div>
                <PostFilter filter={filter} setFilter={setFilter}></PostFilter>
            </div>

            {postError && <h1>празашла шибка ${postError}</h1>}

            <List posts={sortedAndSearchedPosts} delet={deletePost} />
            <div ref={lastElement} style={{backgroundColor: 'red', height:20}}></div>
            {arePostsLoading &&
                 <div style={{ display: 'flex', justifyCo