import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, Box, Link, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 345,
        alignItems: 'top',
        padding: '20px',
        margin: '50px'
    },

    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        margin: '0 auto',
    },

    content: {
        textAlign: 'center',
    },

    button: {
        marginTop: '30px',
        padding: '10px 40px'
    }
}));

function UserInfoItem({ user }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Avatar className={classes.large}>{user.name.charAt(0)}</Avatar>
            <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                    {user.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" >
                    <Box fontStyle="italic" m={1}> @{user.username} </Box>
                    <Link m={1}> {user.email} </Link>
                </Typography>
                <RouterLink className="listOfUser_item" key={user.id} to={`/details/${user.id}/${user.name}`}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        More detail
                    </Button>
                </RouterLink>
            </CardContent>

        </Card>
    );
}

export default UserInfoItem
