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
export type UsersResponse = ApiResponse<User, 'users'>;
export type FullUsersResponse = ApiResponse<FullUser, 'users'>;


export interface Base {
    id: number | string
}


export interface User extends Base {
    username: string
    firstName: string
    lastName: string
    age: number
    company: Pick<UserCompany, 'name'>
    address: Pick<Address, 'country'>
}

interface Address {
    address: string
    country: string
    city: string
    state: string
    postalCode: string
}

interface UserCompany {
    department: string
    name: string
    address: Address
    title: string
    city: string
}


export interface FullUser extends User {
    company: UserCompany
    address: Address
    image: string
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





