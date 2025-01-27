import React from "react";





export type Nullable<T> = T | null | undefined

export type InputProps<T> = T & Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof T>
export type ButtonProps<T> = T & Omit<React.InputHTMLAttributes<HTMLButtonElement>, keyof T>

//
// interface PostCreate {
//     post: Post
//     type: 'create'
// }
//
// interface PostDelete {
//     post: Post
//     type: 'delete'
// }
//
// interface PostLoad {
//     posts: Post[]
//     type: 'load'
// }
//
// export type PostAction  = PostCreate | PostDelete | PostLoad
//
// export interface SortPostOption {
//     query: string;
//     sort: 'title' | 'body' | 'id'
// }