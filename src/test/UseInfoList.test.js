import React from 'react';
import UserInfoList from '../components/UserInfoList'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test ('render list of users infomation', () => {
    const {container, getByText } = render (<UserInfoList />)

})

