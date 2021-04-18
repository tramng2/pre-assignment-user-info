import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    button: {
        marginTop: '30px',
        padding: '10px 40px'
    }
});

function ButtonMoreDetails({ user }) {
    const classes = useStyles();
    return (
        <div>
            <Link className='listOfUser_item' key={user.id} to={`/details/${user.id}/${user.name}`}>
                <Button variant='contained' color='primary' className={classes.button}>
                    More details
                </Button>
            </Link>
        </div>
    );
}

export default ButtonMoreDetails;
