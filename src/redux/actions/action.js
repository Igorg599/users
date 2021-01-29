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