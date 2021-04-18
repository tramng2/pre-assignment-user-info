import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Typography, Card, CardContent, Box,  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
        margin: '0 auto',
        marginTop: '50px',
    },
    avatar: {
        margin: '0 auto',
        width: theme.spacing(12),
        height: theme.spacing(12),
        marginBottom: '20px',
        backgroundColor: '#ff7f50',
        fontSize: '2.5rem'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '50px',
        width: '70%',
        margin: '0 auto',
    },
    title: {
        flexBasis: '100%',
        marginBottom: '20px',
        color:'#3f50b5'
    },
    user_info: {
        marginTop: '10px',
        borderBottom: '1px solid #e6e6e6',
    },
    user_brief: {
        margin: '10px',
        textAlign: 'center',
        flexGrow: '1',
        borderBottom: '4px solid #3f50b5',
    },
    user_detail: {
        flexGrow: '4',
        margin: '10px',
        borderBottom: '4px solid #3f50b5',
        padding: '20px'
    },
    user_detail_sub: {
        display: 'flex',
        flexWrap: 'wrap',

    }
})
);

function UserInfoDetail() {
    const { id, name } = useParams();
    const [userInfo, setUserInfo] = useState('');
    const classes = useStyles();

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUserInfo(data)
        }
        getData()
    }, [id, name]);


    return (
        <div>
            {!userInfo ? <h4>Loading...</h4> :
                <div>
                    <div className={classes.container} fixed>
                        <Typography variant='h5' component='h2' className={classes.title}> User Infomation </Typography>
                        <Card className={classes.user_brief}>
                            <CardContent>
                                <Avatar className={classes.avatar}>{userInfo.name.charAt(0)}</Avatar>
                                <Typography variant='h5' component='h2'> {userInfo.name} </Typography>
                                <Typography variant='body2' color='textSecondary' component='div'>
                                    <Box m={1} fontSize='1rem'>  Username: {userInfo.username} </Box>
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card className={classes.user_detail}>
                            <CardContent>
                                <Typography variant='body2' component='div'>
                                    <Typography variant='h5' component='h4'> Details </Typography>
                                    <div className={classes.user_detail_sub}>
                                        <div style={{marginRight:'50px'}}> <Box fontSize='1rem' className={classes.user_info}> Email: <br /> {userInfo.email} </Box>
                                        </div>
                                        <Box fontSize='1rem' className={classes.user_info}> Phone: <br /> {userInfo.phone} </Box>
                                    </div>
                                    <Box fontSize='1rem' className={classes.user_info}> Company: <br /> {userInfo.company.name} </Box>
                                    <Box fontSize='1rem' className={classes.user_info}> Website: <br /> {userInfo.website} </Box>
                                    <Box fontSize='1rem' className={classes.user_info}> Address: <br /> Street: {userInfo.address.street} | Suite: {userInfo.address.suite} <br /> City: {userInfo.address.city} |  Zip: {userInfo.address.zipcode}</Box>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            }
        </div>
    );
}

export default UserInfoDetail;

