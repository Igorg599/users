import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SaveIcon from '@material-ui/icons/Save';
import {useDispatch} from 'react-redux';
import {changeUser} from '../../redux/actions/action';

const UserTableItem = ({id, name, age, sex, position, onRemove, index}) => {
    const dispatch = useDispatch();
    const [dataInput, setDataInput] = React.useState(true);
    const [newName, setNewName] = React.useState(name);
    const [newAge, setNewAge] = React.useState(age);
    const [newSex, setNewSex] = React.useState(sex);
    const [newPosition, setNewPosition] = React.useState(position);

    const onDeleteUser = () => {
        onRemove(id);
    }

    const onValueNameChange = (e) => {
        setNewName(e.target.value.replace(/[^а-яА-Я]/g, ''));
    }

    const onValueNameAge = (e) => {
        setNewAge(e.target.value);
    }

    const onValueNameSex = (e) => {
        setNewSex(e.target.value.replace(/[^а-яА-Я]/g, ''));
    }

    const onValueNamePosition = (e) => {
        setNewPosition(e.target.value.replace(/[^а-яА-Я]/g, ''));
    }

    const onSaveUser = (e) => {
        e.preventDefault();
        const newobj = {
            id: id,
            name: newName,
            age: newAge,
            sex: newSex,
            position: newPosition
        }
        dispatch(changeUser(newobj));
        setDataInput(!dataInput);
    }

    return (
        <form onSubmit={onSaveUser} className='userlisttable__item'>
            {dataInput ? 
                <div className='userlisttable__item-text'>
                    <p>{name}</p>
                    <p>{age}</p>
                    <p>{sex}</p>
                    <p>{position}</p>
                </div> :
                <div className='userlisttable__item-inputs'>
                    <input type='text' className='userlisttable__item-inputs-item' onChange={onValueNameChange} value={newName} required/>
                    <input type='number' className='userlisttable__item-inputs-item' onChange={onValueNameAge} value={newAge} required/>
                    <input type='text' className='userlisttable__item-inputs-item' onChange={onValueNameSex} value={newSex} required/>
                    <input type='text' className='userlisttable__item-inputs-item' onChange={onValueNamePosition} value={newPosition} required/>
                </div>
            }
            <button type='button' className='userlisttable__item-button_delete' onClick={onDeleteUser}>
                <DeleteIcon size="small" color="secondary"/>
            </button>
            {dataInput ?
                <div className='userlisttable__item-button_editor' onClick={() => setDataInput(!dataInput)}>
                    <BorderColorIcon color="primary"/>
                </div> :
                <button type='submit' className='userlisttable__item-button_editor'>
                    <SaveIcon color="primary"/>
                </button>
            }
            <div className='userlisttable__item-number'>№ {index+1}</div>
        </form>
    )
}

export default UserTableItem;