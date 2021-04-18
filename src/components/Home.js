import React, { useContext }from 'react'
import UserInfoList from './UserInfoList'
import {DataContext} from '../DataContext'


function Home() {
    const [data, setData] = useContext(DataContext)
    return (
       <div>
         {!data.length ? <h4>Loading...</h4> : <UserInfoList data={data}/>}
       </div>
    )
}

export default Home
