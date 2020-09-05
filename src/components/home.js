/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './home.css'
import Post from './post/post';
const home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    console.log(post)
    return (
        <div>
            <h1>posts</h1>
            {
                post.map( pst=>
                    <Post
                        post={pst}
                        key={pst.id}
                    />
                )
            }
        </div>
    );
};

export default home;