import {useState, useEffect, useCallback} from 'react';

type PaginationParams = {
    limit: number;
    skip: number;
};

type ResourceFetcher<T> = (params: PaginationParams, query?: string) => Promise<{
    data: T[];
    total: number;
}>;

export type PaginationData<T> = {
    data: T[]
    hasMore: boolean
    isLoading: boolean
    error: string | null
    total: number;
    query?: string
    setQuery?: (query: string) => void
    loadNextPage: () => Promise<void>
    currentPage: number
    reset: () => void
}

type UsePaginatedResourceOptions = {
    enableSearch?: boolean;
    initialQuery?: string;
    batchSize?: number;
};


export const usePaginatedResource = <T>(
    fetcher: ResourceFetcher<T>,
    options: UsePaginatedResourceOptions = {}
): PaginationData<T> => {
    const [data, setData] = useState<T[]>([]);


    const { enableSearch = true, initialQuery = '', batchSize = 20 } = options;
    const [query, setQuery] = useState(initialQuery);

    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [total, setTotal] = useState(0);

    const fetchData = useCallback(
        async (currentPage: number, searchQuery = query) => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetcher(
                    {limit: batchSize, skip: currentPage * batchSize},
                    searchQuery
                );

                setData(prev =>
                    currentPage === 0 ? response.data : [...prev, ...response.data]
                );
                setTotal(response.total);
                setHasMore(response.total > (currentPage + 1) * batchSize);

                if (searchQuery === query) {
                    setPage(currentPage + 1);
                }
            } catch (err) {
                setError('Ошибка загрузки данных');
            } finally {
                setIsLoading(false);
            }
        },
        [fetcher, batchSize, query]
    );

    useEffect(() => {
        const handler = setTimeout(() => {
            fetchData(0, query);
        }, 300);

        return () => clearTimeout(handler);
    }, [query]);

    const loadNextPage = useCallback(async () => {
        if (!hasMore || isLoading) return;
        await fetchData(page);
    }, [hasMore, isLoading, page, fetchData]);

    return {
        data,
        hasMore,
        isLoading,
        error,
        total,
        query: enableSearch ? query : undefined,
        setQuery: enableSearch ? setQuery : undefined,
        loadNextPage,
        currentPage: page,
        reset: () => {
            setData([]);
            setPage(0);
            setHasMore(true);
            setQuery('');
        }
    };
};