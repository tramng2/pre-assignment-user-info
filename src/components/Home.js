import React, { useContext } from 'react';
import UserInfoList from './UserInfoList';
import { DataContext } from '../DataContext';

function Home() {
    const [data] = useContext(DataContext);
    return (
        <div>
            {data.length ? <UserInfoList data={data} /> : <h4>Loading...</h4> }
        </div>
    );
}

export default Home;
