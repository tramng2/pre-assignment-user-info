import React from 'react'
import UserInfoItem from './UserInfoItem';

function UserInfoList({ data }) {

    return (
        <div className="listOfUser">
            {data.map((user) =>          
                <UserInfoItem user={user} />
            )}
        </div>
    )
}

export default UserInfoList
