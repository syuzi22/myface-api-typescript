import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { UserList } from './pages/userlist/userlist';
import { MemoryRouter } from 'react-router-dom';

describe('UserList', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(
                {
                    next: null,
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
                    total: 2
                }
            ),
            status: 200,
            ok: true
        })
    })

    test('should render', async() => {
        await act( async () => render(<MemoryRouter><UserList/></MemoryRouter>));
        const linkElement = screen.getByText(/Anatollo Assinder/i);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/userdetails/58'); 
    });
})
