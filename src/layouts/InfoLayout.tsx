// layouts/InfoLayout.tsx
import React, {FC, ReactNode, useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {Base} from "../api/types";
import {ResourceState} from "../hooks/core/useResource";
import {PaginationData} from "../hooks/core/usePaginatedResource";
import Loader from "../components/UI/Loader";
import Error from "../components/UI/Error";

interface InfoLayoutProps<T, L extends Base> {
    infoHook: () => ResourceState<T>;
    listHook: () => PaginationData<L>;
    InfoComponent: ReactNode;
    ListComponent: FC<{ data: L }>;
    dependencies?: any[];
    emptyListMsg?: string
}

const InfoLayout = <T, L extends Base>(
    {
        infoHook,
        listHook,
        InfoComponent,
        ListComponent,
        dependencies = [],
        emptyListMsg = ''
    }: InfoLayoutProps<T, L>) => {
    const {
        data: infoData,
        isLoading: isInfoLoading,
        error: infoError
    } = infoHook();
    const {
        data: listData,
        hasMore,
        loadNextPage,
        isLoading: isListLoading,
        error: listError
    } = listHook();
    console.log(listData, isListLoading)

    useEffect(() => {
        loadNextPage();
    }, dependencies);

    if (isInfoLoading) return <Loader/>;
    if (infoError) return <Error message={infoError}/>;

    return (
        <div className="info-layout">
            {infoData && InfoComponent}

            <div className="related-list">
                {isListLoading && <Loader/>}

                {listData.length > 0
                    ? <InfiniteScroll
                        dataLength={listData.length}
                        next={loadNextPage}
                        hasMore={hasMore}
                        loader={<Loader/>}
                    >
                        {listData.map(item => (
                            <ListComponent key={item.id} data={item}/>
                        ))}
                    </InfiniteScroll>
                    : <div style={{width: 'fit-content', margin: 'auto', fontWeight: 500, fontSize: '24px'}}>
                        {emptyListMsg}
                    </div>
                }

                {listError && <Error message={infoError}/>}
            </div>
        </div>
    );
};
export default InfoLayout