import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from './redux/actions/action';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(({users}) => users.items);
  console.log(users);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      1
    </div>
  );
}

export default App;
