import './style.css';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import PostsList from '../../pages/PostsList';
import TodoList from '../../pages/TodoList';
import UserList from '../../pages/UserList';
import UserDetails from '../../pages/UserList/UserDetails';
import NotFound from '../../pages/404';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<PostsList />} />
        <Route path='posts' element={<PostsList />} />
        <Route path='todos' element={<TodoList />} />
        <Route path='users' element={<UserList />} />
        <Route path='users/:id' element={<UserDetails />} >
          <Route path='albums' element={<p>Albums</p>} />
          <Route path='todos' element={<p>Todos</p>} />
          <Route path='posts' element={<p>Posts</p>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
