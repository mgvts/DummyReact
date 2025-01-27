import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import {deepMergeObjects} from '../util/deepMerge';
import type {ApiResponse, ListInfo} from "./types";

const cache = new Map<string, unknown>();

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const axiosError = error as AxiosError;
        console.error('API Error:', axiosError.message);
        throw axiosError;
    }
);

export class BaseService {
    private static BASE: string = 'https://dummyjson.com';
    protected static CONFIG: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 10000,
    };


    protected static async request<T>(method: 'get' | 'post' | 'put' | 'delete', url: string, config: AxiosRequestConfig = {}): Promise<T> {
        const mergedConfig = deepMergeObjects(this.CONFIG, config);

        try {
            const response: AxiosResponse<T> = await axios({
                method,
                url: this.BASE + url,
                ...mergedConfig,
            });
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error('API Error:', axiosError.message);
            throw axiosError;
        }
    }




    protected static async get<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
        const cacheKey = JSON.stringify({url, config});

        if (cache.has(cacheKey)) {
            return cache.get(cacheKey) as T;
        }

        const response = await this.request<T>('get', url, config);
        cache.set(cacheKey, response);
        return response;
    }

    protected static async post<T>(url: string, data: unknown, config: AxiosRequestConfig = {}): Promise<T> {
        return this.request<T>('post', url, {data, ...config});
    }

    protected static async put<T>(url: string, data: unknown, config: AxiosRequestConfig = {}): Promise<T> {
        return this.request<T>('put', url, {data, ...config});
    }

    protected static async delete<T>(url: string, config: AxiosRequestConfig = {}): Promise<T> {
        return this.request<T>('delete', url, config);
    }
}