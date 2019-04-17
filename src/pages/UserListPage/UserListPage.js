import React from 'react';
import UserList from '../../components/UserList/UserList'
import { UserDataProvider } from '../../providers/UserDataProvider/UserDataProvider';

export default () => (
    <UserDataProvider>
        <UserList />
    </UserDataProvider>
);