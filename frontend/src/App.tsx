import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css'
import { PostModel } from '../../src/models/api/postModel.ts';
import { PostList } from './pages/postlist/postlist.tsx';
import { UserDetails } from './pages/userdetails/userdetails.tsx';
import { UserList } from './pages/userlist/userlist.tsx';

function App() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  //
  const [selectedUserId, setSelectedUserId] = useState<number|null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
     .then(response => response.json())
     .then(data => setPosts(data.results))
     .catch(error => {
        setError(true);
        console.log(error);
     })
     .finally(() => {
      setIsLoading(false);
     })
  }, [])

  if (error) {
    return (<div>Service is temporarily unavailable. Please, try later. </div>)
  }

  if (isLoading) {
    return (<div>Post are loading...</div>)
  }

  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="/userdetails" element={<UserDetails id={selectedUserId} />} />
        <Route path="/userlist" element={<UserList setSelectedUserId={setSelectedUserId} />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
