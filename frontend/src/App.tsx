import { useEffect, useState } from 'react'
import './App.css'
import { PostModel } from '../../src/models/api/postModel.ts';
import { Post } from './components/post/post.tsx';

function App() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

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
    <div>
      <div>
        <ul>
          {posts.map(({imageUrl, postedBy, createdAt, message}: PostModel, index: number) => {
            return (<li key={`post-${index}`}>
              <Post 
                imageUrl={imageUrl}
                postedBy={postedBy.username}
                createdAt={createdAt}
                message={message}
              />
            </li>)
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
