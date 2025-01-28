import {useState, useCallback} from 'react';

export type ResourceState<T> = {
    data: T | null;
    isLoading: boolean;
    error: string | null;
};

export const useResource = <T>(
    fetcher: (id: string) => Promise<T>
) => {
    const [state, setState] = useState<ResourceState<T>>({
        data: null,
        isLoading: false,
        error: null
    });

    const fetchData = useCallback(async (id: string) => {
        try {
            setState(st => ({ ...st, isLoading: true }));
            const data = await fetcher(id);
            setState({ data, isLoading: false, error: null });
            return data;
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Unknown error';
            setState({ data: null, isLoading: false, error: message });
            throw err;
        }
    }, [fetcher]);

    return { ...state, fetchData };
};