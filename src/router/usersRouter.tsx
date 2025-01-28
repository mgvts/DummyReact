import {lazy} from "react";

const UsersIndex = lazy(() => import('../pages/users/UsersIndex'));
const Users = lazy(() => import('../pages/users/UsersPage'));
const UsersId = lazy(() => import('../pages/users/UsersId'));

export const usersRoutes = {
    path: 'users',
    element: <UsersIndex />,
    children: [
        { index: true, element: <Users /> },
        { path: ':id', element: <UsersId /> },
    ],
};