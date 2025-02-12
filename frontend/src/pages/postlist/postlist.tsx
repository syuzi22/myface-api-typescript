import { PostModel } from '../../../../src/models/api/postModel.ts';
import { Post } from './../../components/post/post.tsx';

interface PostListProps {
    posts: PostModel[];
}

export const PostList = ({posts}: PostListProps) => {
    return (
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
    )
}
