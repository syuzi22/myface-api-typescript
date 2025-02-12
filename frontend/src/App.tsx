import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import './App.scss'
import { PostList } from './pages/postlist/postlist.tsx';
import { UserDetails } from './pages/userdetails/userdetails.tsx';
import { UserList } from './pages/userlist/userlist.tsx';

function App() {
  const [selectedUserId, setSelectedUserId] = useState<number|null>(null);

  return (
    <Router>
      <div>
      <nav>
        <ul>
          <li><Link to="/">Posts</Link></li>
          <li><Link to="/userlist">Users</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/userdetails" element={<UserDetails id={selectedUserId} />} />
        <Route path="/userlist" element={<UserList setSelectedUserId={setSelectedUserId} />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
