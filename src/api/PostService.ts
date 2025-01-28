import {BaseService} from './BaseService';
import {AxiosRequestConfig} from "axios";
import type {ApiResponse, CommentsResponse, ListInfo, Post, PostsResponse, Comment, FullUser, FullPost} from "./types";


const BASE_INFO = {limit: 30, skip: 0}

//todo may refactor with multiple BASE_INFO and pass its into getList
export class PostService extends BaseService {
    protected static BASE_PATH = '/posts';
    protected static CONFIG: AxiosRequestConfig = {
        params: {
            select: 'title,userId,id,body',
        },
    };

    static async getAll(params = BASE_INFO): Promise<PostsResponse> {
        return this.getList<Post, 'posts'>('', {params});
    }

    static async getById(id: Post['id']): Promise<FullPost> {
        return this.get<FullPost>(`${this.BASE_PATH}/${id}`, {
            params: {select: 'title,reactions,userId,id,body,title,tags'}
        });
    }

    static async getQueryPosts(query: string, params = BASE_INFO): Promise<PostsResponse> {
        return this.getList<Post, 'posts'>(`/search?q=${query}`, {params});
    }

    static async getByUserId(userId: Post['userId'], params = BASE_INFO): Promise<PostsResponse> {
        return this.getList<Post, 'posts'>(`/user/${userId}`, {params});
    }

    static async getComments(id: Post['id'], params = BASE_INFO): Promise<CommentsResponse> {
        return this.getList<Comment, 'comments'>(`/${id}/comments`, {
            params: {
                select: `${this.CONFIG.params?.select},user,likes`,
                ...params,
            },
        });
    }

    protected static async getList<T, K extends string>(url: string = '', config: AxiosRequestConfig = {}): Promise<ApiResponse<T, K>> {
        const response = await this.get<{ [key in K]: T[] } & ListInfo>(this.BASE_PATH + url, config);
        return {
            ...response,
            info: {
                total: response.total,
                skip: response.skip,
                limit: response.limit,
            },
        };
    }
}
