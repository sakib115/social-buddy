/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import './comment.css'
import CommentDetail from './commentDetail';
const comment = ({ id }) => {
    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])
    return (
        <div>
            <h1>Comments goes here</h1>
            {
                comment.map( cmt=>
                    <CommentDetail comment={cmt}/>
                )
            }
        </div>
    );
};

export default comment;