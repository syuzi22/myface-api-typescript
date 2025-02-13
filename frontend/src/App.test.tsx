import '@testing-library/jest-dom';
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
import { render, screen } from '@testing-library/react';
import { PostList } from './pages/postlist/postlist';

const mockPostsResponse = {
    results: []
}

global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockPostsResponse),
    status: 200,
    ok: true
})

test('renders Hello text', async() => {
    render(<PostList />);
    const textElement = await screen.findByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
});


