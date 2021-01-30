import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';

const UserListItem = ({id, name, age, sex, position, onRemove}) => {

    const onDeleteUser = () => {
        onRemove(id);
    }

    return (
        <div className='userlist__item'>
            <div className='userlist__item-left'>
                <p>Имя:</p>
                <p>Возраст:</p>
                <p>Пол:</p>
                <p>Должность:</p>
            </div>
            <div className='userlist__item-right'>
                <p>{name}</p>
                <p>{age}</p>
                <p>{sex}</p>
                <p>{position}</p>
            </div>
            <button type='button' className='userlist__item-button_delete' onClick={onDeleteUser}>
                <DeleteIcon size="small" color="secondary"/>
            </button>
            <button type='button' className='userlist__item-button_editor'>
                <BorderColorIcon color="primary"/>
            </button>
        </div>
    )
}

export default UserListItem;