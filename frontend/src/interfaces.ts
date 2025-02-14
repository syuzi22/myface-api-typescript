interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface PostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: string;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
}

interface UserPostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: string;
}

export interface UserModel {
    id: number;
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string;
    posts: UserPostModel[];
    likes: UserPostModel[];
    dislikes: UserPostModel[];
}

export interface PostsResponse {
    results: PostModel[];
}

export interface UsersResponse {
    next: string | null;
    previous: string | null;
    results: UserModel[];
    total: number;
}