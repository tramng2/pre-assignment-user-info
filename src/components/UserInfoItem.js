import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, Typography, Box, Link } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ButtonMoreDetails from './ButtonMoreDetails'


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

}));

function UserInfoItem({ user }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Avatar className={classes.large}>{user.name.charAt(0)}</Avatar>
            <CardContent className={classes.content}>
                <Typography gutterBottom variant='h5' component='h2'>
                    {user.name}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='div'>
                    <Box fontStyle='italic' m={1}> @{user.username} </Box>
                    <Link m={1}> {user.email} </Link>
                </Typography>
                <ButtonMoreDetails user={user} />
            </CardContent>
        </Card>
    );
}

export default UserInfoItem;
