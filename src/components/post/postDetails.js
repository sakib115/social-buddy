/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './postDetails.css'
import { useParams } from 'react-router-dom';
import Comment from './comments/comment';
const postDetails = () => {
    const { ids } = useParams()
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ids}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <div className='main-div'>
                <h3>{post.title}</h3>
                <h2>{post.body}</h2>
            </div>
            <div>
                <Comment id={ids} />
            </div>
        </div>
    );
};

export default postDetails;