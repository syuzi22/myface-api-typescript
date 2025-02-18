import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import './App.scss'
import { PostList } from './pages/postlist/postlist.tsx';
import { UserDetails } from './pages/userdetails/userdetails.tsx';
import { UserList } from './pages/userlist/userlist.tsx';

function App() {
  return (
    <Router>
      <div>
      <nav>
        <ul className="navigator">
          <li><Link to="/">Posts</Link></li>
          <li><Link to="/userlist">Users</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
