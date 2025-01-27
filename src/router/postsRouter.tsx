import { lazy } from 'react';

const PostsIndex = lazy(() => import('../pages/posts/PostsIndex'));
const Posts = lazy(() => import('../pages/posts/Posts'));
const PostId = lazy(() => import('../pages/posts/PostId'));

export const postsRoutes = {
    path: 'posts',
    element: <PostsIndex />,
    children: [
        { index: true, element: <Posts /> },
        { path: ':id', element: <PostId /> },
    ],
};