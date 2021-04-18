import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Typography, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '50%',
        margin: '0 auto',
        marginTop: '50px',
        padding: '50px'
    },
});

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
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {userInfo.name}
                        </Typography>
                        <Typography variant="body2" component="p">
                            <ul>
                                <li>Username:  {userInfo.username}</li>
                                <li>Email:  {userInfo.email}</li>
                                <li>Phone:  {userInfo.phone}</li>
                                <li>Company:  {userInfo.company.name}</li>
                                <li>Website:  {userInfo.website}</li>
                                <li>Address:  
                                    <ul>
                                        <li>Street: {userInfo.address.street}</li>
                                        <li>Suite: {userInfo.address.suite}</li>
                                        <li>City: {userInfo.address.city}</li>
                                        <li>Zip: {userInfo.address.zipcode}</li>
                                    </ul>
                                </li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            }
        </div>
    )
}

export default UserInfoDetail

