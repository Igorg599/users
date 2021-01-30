import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch} from 'react-redux';
import {sortUsersName, sortUsersAge, sortUsersSex, sortUsersPosition} from '../../redux/actions/action';

export default function SortPopUp() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSortUsersName = () => {
    setAnchorEl(null);
    dispatch(sortUsersName());
  };

  const onSortUsersAge = () => {
    setAnchorEl(null);
    dispatch(sortUsersAge());
  };

  const onSortUsersSex = () => {
    setAnchorEl(null);
    dispatch(sortUsersSex());
  };

  const onSortUsersPosition = () => {
    setAnchorEl(null);
    dispatch(sortUsersPosition());
  };

  return (
    <div>
      <Button variant="contained" color="secondary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Сортировка
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onSortUsersName}>По имени</MenuItem>
        <MenuItem onClick={onSortUsersAge}>По возрасту</MenuItem>
        <MenuItem onClick={onSortUsersSex}>По полу</MenuItem>
        <MenuItem onClick={onSortUsersPosition}>По должности</MenuItem>
      </Menu>
    </div>
  );
}