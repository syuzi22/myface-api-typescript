import { PostsResponse, UserModel, UsersResponse } from './interfaces';

export const mockPostsResponse: PostsResponse = {
    results: [{
        id: 130,
        message: "Operative system-worthy synergy",
        imageUrl: "https://picsum.photos/id/158/600",
        createdAt: "2021-01-27 21:55:56",
        postedBy: {
            id: 3,
            name: "Valry Gregory",
            username: "vgregory2",
            email: "vgregory2@wsj.com",
        },
        likedBy: [],
        dislikedBy: []
    }, {
        id: 79,
        message: "Implemented bifurcated infrastructure",
        imageUrl: "https://picsum.photos/id/435/600",
        createdAt: "2021-01-27 21:44:04",
        postedBy: {
            id: 16,
            name: "Juline Ainscow",
            username: "jainscowf",
            email: "jainscowf@homestead.com"
        },
        likedBy: [],
        dislikedBy: []
        }
    ]
}

export const mockUserDetailsResponse: UserModel = {
    id: 41,
    name: "Alf Berre",
    username: "aberre14",
    email: "aberre14@un.org",
    coverImageUrl: "https://picsum.photos/id/486/2100/800",
    profileImageUrl: "https://robohash.org/aberre14.png?bgset=bg1",
    posts: [{
        id: 330,
        message: "Programmable human-resource product",
        imageUrl: "https://picsum.photos/id/526/600",
        createdAt: "2021-01-14 07:21:18",
    },
    {
        id: 871,
        message: "Cloned bottom-line product",
        imageUrl: "https://picsum.photos/id/973/600",
        createdAt: "2021-01-05 00:41:57",
    }],
    likes: [],
    dislikes: []
}

export const mockUsersResponse: UsersResponse = {
    next: "/users/?page=2&pageSize=10",
    previous: null,
    results: [{
        id: 58,
        name: "Anatollo Assinder",
        username: "aassinder11",
        email: "aasinder11@blinklist.com",
        coverImageUrl: "https://picsum.photos/id/302/2100/800",
        profileImageUrl: "https://robohash.org/aassinder1l.png?bgset=bg1",
        likes: [],
        dislikes: [],
        posts: []
    }, {
        id: 21,
        name: "Audrie Laslett",
        username: "alaslettk",
        email: "alaslettk@cpanel.net",
        coverImageUrl: "https://picsum.photos/id/222/2100/800",
        profileImageUrl: "https://robohash.org/alaslettk.png?bgset=bg1",
        likes: [],
        dislikes: [],
        posts: []
    }],
    total: 100
}