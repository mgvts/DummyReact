import {BaseService} from "./BaseService";
import {type ApiResponse, FullUser, type ListInfo, User, UsersResponse} from "./types";
import {AxiosRequestConfig} from "axios";


export class UserService extends BaseService {
    protected static BASE_PATH = '/users'
    protected static CONFIG = {
        params: {
            select: `id,username,firstName,lastName,age,company,address`
        },
    }

    static async getAll(params = {limit: 30, skip: 0}) {
        return this.getList<User, 'users'>('', {params})
    }

    static async getById(id: User['id'], params = {}): Promise<FullUser> {
        return await this.get(this.BASE_PATH + `/${id}`, {
            params: {
                select: `id,firstName,lastName,username,age`
            }
        }) as FullUser
    }

    static async getSearch(query: string, params = {limit: 30, skip: 0}): Promise<UsersResponse> {
        return await this.getList<User, 'users'>(`/search?q=${query}`, {params});
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