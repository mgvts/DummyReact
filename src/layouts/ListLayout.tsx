import React, {FC, ReactNode} from "react";
import SearchHeader from "../components/SearchHeader";
import Loader from "../components/UI/Loader";
import styled from "styled-components";
import {ListElement} from './types'
import {ScrollableList} from "../components/UI/List";
import {Base} from "../api/types";
import {PaginationData} from "../hooks/core/usePaginatedResource";

const ListWrapper = styled.div`
    height: 100vh;
    overflow: hidden;
`;

interface ListLayoutProps<T extends Base> {
    domainHook: () => PaginationData<T>
    ListElement: ListElement<T>
}

const ListLayout = <T extends Base>({ domainHook, ListElement }: ListLayoutProps<T>): ReactNode => {
    const {
        data,
        hasMore,
        loadNextPage,
        setQuery,
        total,
        isLoading,
        error
    } = domainHook();

    return (
        <ListWrapper>
            <SearchHeader
                onSearch={setQuery}
                total={total}
            />
            {error && <div>{error}</div>}
            {isLoading && data.length === 0 ? (
                <Loader/>
            ) : (
                <ScrollableList
                    fetchItems={loadNextPage}
                    hasMore={hasMore}
                    length={data.length}
                    height={`100vh`}
                >
                    {data.map((dt, index) => (
                        <ListElement
                            key={dt.id}
                            data={dt}
                        />
                    ))}
                </ScrollableList>
            )}
        </ListWrapper>
    )
};

export default ListLayout;