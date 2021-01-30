import React from 'react';
import { Button, TextField } from '@material-ui/core';
import SortPopUp from './SortPopUp';
import UserModal from './UsersModal';

const Header = ({searchUser}) => {
    const [modalActive, setmodalActive] = React.useState(false);

    function onUpdateSearch(e) {
        searchUser(e.target.value);
    }

    return (
        <>
            <div className='header'>
                <Button onClick={() => {setmodalActive(true); document.body.style.overflow = 'hidden'}} variant="contained" color="primary">
                    Добавить нового пользователя
                </Button>
                <TextField 
                id="outlined-basic" 
                label="Поиск по должности" 
                variant="outlined" 
                onChange={onUpdateSearch}/>
                <SortPopUp/>
            </div>
            <UserModal active={modalActive} setActive={setmodalActive}/>
        </>
    )
}

export default Header;