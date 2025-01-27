import React, {useEffect, useMemo, useReducer, useState} from "react";
import {Post, PostAction} from "../types";


function postsReducer(state: Post[], action: PostAction) {
    switch (action.type) {
        case 'create':
            return action.post ? [...state, action.post] : state;
        case 'delete':
            return [...state].filter(p => p.id != action.post?.id)
        case 'load':
            return [...state, ...action.posts];
        default:
            throw new Error(`Unknown action action`);
    }
}

// export function usePosts (): [Post[],  React.ActionDispatch<[action: PostAction]>] {
//     const [posts, dispatchPosts] = useReducer(
//         postsReducer,
//         [],
//         () => {
//             const savedPosts = localStorage.getItem('posts');
//             return savedPosts ? JSON.parse(savedPosts) : [];
//         }
//     );
//
//     useMemo(() => {
//         localStorage.setItem('posts', JSON.stringify(posts))
//     }, [posts])
//
//     return [posts, dispatchPosts]
// }

export function usePosts(): [Post[], React.Dispatch<any>] {
    const [posts, setPosts] = useState(
        []
    );

    // useMemo(() => {
    //     localStorage.setItem('posts', JSON.stringify(posts))
    // }, [posts])

    return [posts, setPosts]
}