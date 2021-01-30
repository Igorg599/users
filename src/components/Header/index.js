import React from 'react';
import { Button, TextField } from '@material-ui/core';
import SortPopUp from './SortPopUp';

const Header = () => {
    return (
        <div className='header'>
            <Button variant="contained" color="primary">
                Добавить нового пользователя
            </Button>
            <TextField id="outlined-basic" label="Поиск по должности" variant="outlined"/>
            <SortPopUp/>
        </div>
    )
}

export default Header;