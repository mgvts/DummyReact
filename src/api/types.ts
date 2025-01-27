export type BaseApiResponse<T, K extends string> = {
    [key in K]: T[]
}

export interface ListInfo {
    total: number;
    skip: number;
    limit: number;
}

export type ApiResponse<T, K extends string> = BaseApiResponse<T, K> & {
    info: ListInfo
}

export type PostsResponse = ApiResponse<Post, 'posts'>;
export type CommentsResponse = ApiResponse<Comment, 'comments'>;


export interface Base {
    id: number | string
}


export interface User extends Base {
    username: string
}

export interface FullUser extends User {
    firstName: string,
    lastName: string,
    age: number
}


export interface Post extends Base {
    userId: User['id']
    title: string
    body: string
}


export interface Comment extends Base {
    body: string
    likes: number
    user: {
        id: User['id']
        username: string
        fullName: string
    }
}


export interface FullPost extends Post {
    reactions: {
        likes: number
        dislikes: number
    },
    views: number
    tags: string[]
}





