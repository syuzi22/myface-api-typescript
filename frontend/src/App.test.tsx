import '@testing-library/jest-dom';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import { act, render, screen } from '@testing-library/react';
import { PostList } from './pages/postlist/postlist';
import { UserList } from './pages/userlist/userlist';
import { mockPostsResponse, mockUsersResponse } from './mockresponses';
import { MemoryRouter } from 'react-router-dom';

describe('PostList', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockPostsResponse),
            status: 200,
            ok: true
        })
    })

    test('posts', async() => {
        render(<PostList />);
        const textElement = await screen.findByText(/Hello/i);
        expect(textElement).toBeInTheDocument();
    });
})

//////////////

// describe('User details', () => {
//     beforeEach(() => {
//         global.fetch = jest.fn().mockResolvedValue({
//             json: jest.fn().mockResolvedValue(mockUserDetailsResponse),
//             status: 200,
//             ok: true
//         })
//     })
// })

///////////

describe('UserList', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockUsersResponse),
            status: 200,
            ok: true
        })
    })

    test('should render', async() => {
        await act( async () => render(<MemoryRouter><UserList/></MemoryRouter>));
        // expect(await screen.findByText("Anatollo")).toBeVisible();
    });
})



