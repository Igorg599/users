import React from 'react';
import Header from './components/Header/';
import UserList from './components/UserList';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from './redux/actions/action';


function App() {
  const dispatch = useDispatch();
  const users = useSelector(({data}) => data.items);
  const [inputVolume, setInputVolume] = React.useState('');
  
  function searchUser(value) {
    setInputVolume(value);
  }

  React.useEffect(() => {
      if (users === null) {
      dispatch(fetchUsers());
      } return users;
  }, [dispatch, users]);

  let newUsers = [];

  if (users === null) {
    return newUsers;
  } else {
    newUsers = users.filter((location) => {
      return location.position.indexOf(inputVolume) > -1
    });
  }

  return (
    <div className="wrapper">
      <Header searchUser={searchUser}/>
      <UserList users={newUsers}/>
    </div>
  );
}

export default App;
