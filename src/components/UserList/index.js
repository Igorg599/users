import React from 'react';
import {removeUserItem} from '../../redux/actions/action';
import {useDispatch} from 'react-redux';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import UserListItem from './UserListItem';
import UserTableItem from './UserTableItem';

const UserList = ({users}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [visibleList, setVisibleList] = React.useState(true);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch();

    const onRemoveItem = (id) => {
        dispatch(removeUserItem(id));
    };

    const onVisibleTable = () => {
        setAnchorEl(null);
        setVisibleList(false);
    }

    const onVisibleList = () => {
        setAnchorEl(null);
        setVisibleList(true);
    }

    return (
        <>
            <div className="userlist__title">
                <Button variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Выбор отображения
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={onVisibleTable}>В виде таблицы</MenuItem>
                    <MenuItem onClick={onVisibleList}>В виде карточек</MenuItem>
                </Menu>
            </div>
            {visibleList ?
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
                </div> :
                <>
                    <div className='userlisttable-title'>
                        <p>Имя</p>
                        <p>Возраст</p>
                        <p>Пол</p>
                        <p>Должность</p>
                    </div>
                    <div className='userlisttable'>
                        {users && users.map((item, index) => (
                            <UserTableItem 
                            index = {index}
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
                </>
            }
        </>
    )
}

export default UserList;