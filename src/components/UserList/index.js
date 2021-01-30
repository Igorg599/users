import React from 'react';
import {removeUserItem} from '../../redux/actions/action';
import {useDispatch} from 'react-redux';

import UserListItem from './UserListItem';

const UserList = ({users}) => {
    const dispatch = useDispatch();

    const onRemoveItem = (id) => {
        dispatch(removeUserItem(id));
    };

    return (
        <div className='userlist'>
            {users && users.map(item => (
                <UserListItem 
                id = {item.id}
                name = {item.name}
                age = {item.age}
                sex = {item.age}
                position = {item.position}
                key={item.id} 
                onRemove={onRemoveItem}
                {...item}/>
            ))}
        </div>
    )
}

export default UserList;