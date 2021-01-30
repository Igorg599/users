import React from 'react';
import {fetchUsers, removeUserItem} from '../../redux/actions/action';
import {useSelector, useDispatch} from 'react-redux';

import UserListItem from './UserListItem';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector(({data}) => data.items);

    console.log(users);

    React.useEffect(() => {
        if (users === null) {
        dispatch(fetchUsers());
        } 
    }, [dispatch, users]);

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