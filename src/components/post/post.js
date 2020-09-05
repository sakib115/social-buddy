/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './post.css'

//material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//react router import 
import { Link } from "react-router-dom";

const post = (props) => {

    //M UI classes
        const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        title: {
            fontSize: 14,
            },
        btn: {
            color: '#4267B2',
        },
        });
        const classes = useStyles();

    return (
        <div className='main'>
            <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.post.title}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {props.post.body}
                        </Typography>
                        <Typography variant="body2" component="p">
                        <br />
                        <Link to={`post/detail/id/${props.post.id}`}>
                            <Button size="small" className={classes.btn}>See More</Button>
                        </Link>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        
                    </CardActions>
            </Card>
        </div>
    );
};

export default post;