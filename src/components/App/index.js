import './style.css';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import PostsList from '../../pages/PostsList';
import TodoList from '../../pages/TodoList';
import UserList from '../../pages/UserList';
import UserDetails from '../../pages/UserList/UserDetails';
import NotFound from '../../pages/404';
import Albums from '../../pages/UserList/UserDetails/Albums';
import Todos from '../../pages/UserList/UserDetails/Todos';
import Posts from '../../pages/UserList/UserDetails/Posts';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<PostsList />} />
        <Route path='posts' element={<PostsList />} />
        <Route path='todos' element={<TodoList />} />
        <Route path='users' element={<UserList />} />
        <Route path='users/:id' element={<UserDetails />} >
          <Route index element={<Albums />} />
          <Route path='albums' element={<Albums />} />
          <Route path='todos' element={<Todos />} />
          <Route path='posts' element={<Posts />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
