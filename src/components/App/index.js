import './style.css';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import PostsList from '../../pages/PostsList';
import TodoList from '../../pages/TodoList';
import UserList from '../../pages/UserList';
import UserMoreInfo from '../../pages/UserList/UserMoreInfo';
import NotFound from '../../pages/404';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<PostsList />} />
        <Route path='postslist' element={<PostsList />} />
        <Route path='todolist' element={<TodoList />} />
        <Route path='userlist' element={<UserList />} />
        <Route path='userlist/:id' element={<UserMoreInfo />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
