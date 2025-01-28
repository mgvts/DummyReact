import { lazy } from 'react';

const PostsIndex = lazy(() => import('../pages/posts/PostsIndex'));
const PostsPage = lazy(() => import('../pages/posts/PostsPage'));
const PostId = lazy(() => import('../pages/posts/PostId'));

export const postsRoutes = {
    path: 'posts',
    element: <PostsIndex />,
    children: [
        { index: true, element: <PostsPage /> },
        { path: ':id', element: <PostId /> },
    ],
};