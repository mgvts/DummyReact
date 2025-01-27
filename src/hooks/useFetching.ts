import {useState} from "react";
import {AxiosError} from "axios";

export const useFetching =
    (callback: (..._: any[]) => Promise<void>): [(..._: any[]) => Promise<void>, boolean, string] => {
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState('');

        const fetching = async (...args: any[]) => {
            try {
                setIsLoading(true)
                await callback(...args)
            } catch (e) {
                setError((e as AxiosError).message || 'getting error');
            } finally {
                setIsLoading(false)
            }
        }

        return [fetching, isLoading, error]
    }