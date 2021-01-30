import axios from 'axios';


export const fetchUsers = () => (dispatch)  => {
    axios.get('/users/').then (({data}) => {
        dispatch(setUsers(data));
    });
};

export const setUsers = (items) => ({
    type: 'SET_USERS',
    payload: items,
});

export const sortUsersName = (items) => ({
    type: 'SORT_USERS_NAME'
});

export const sortUsersAge = (items) => ({
    type: 'SORT_USERS_AGE'
});

export const sortUsersSex = (items) => ({
    type: 'SORT_USERS_SEX'
});

export const sortUsersPosition = (items) => ({
    type: 'SORT_USERS_POSITION'
});

export const removeUserItem = (id) => ({
    type: 'REMOVE_USER_ITEM',
    payload: id,
});

export const changeUser = (obj) => ({
    type: 'CHANGE_USER',
    payload: obj,
});

export const addNewUser = (obj) => ({
    type: 'ADD_NEW_USER',
    payload: obj,
});