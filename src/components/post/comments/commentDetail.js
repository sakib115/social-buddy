/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './commentDetail.css'

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const commentDetail = ({ comment }) => {

        const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
            margin: theme.spacing(1),
            },
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
            marginLeft: '43vw'
        },
        }));
        const classes = useStyles();


    const { name, body, email, id } = comment;
    return (
        <div className='comment-main-div'>
            <Avatar alt="Remy Sharp" src={`https://randomuser.me/api/portraits/men/${id}.jpg`} className={classes.large} />
            <p className="name">name:{name}</p>
            <h3 className="comment">{body}</h3>
            <p className="email">{email}</p>

        </div>
    );

};

export default commentDetail;