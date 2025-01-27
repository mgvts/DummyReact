import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import {FC, ReactNode} from "react";
import Loader from "./Loader";

interface ListProps {
    $direction?: "row" | "column";
    $gap?: string;
    $align?: string;
    $justify?: string;
    $width?: string;
}

const List = styled.div<ListProps>`
    display: flex;
    flex-direction: ${(props) => props.$direction || "row"};
    gap: ${(props) => props.$gap || "0"};
    align-items: ${(props) => props.$align || "stretch"};
    justify-content: ${(props) => props.$justify || "flex-start"};
    width: ${(props) => props.$width || "auto"};
`;

const Row = styled(List).attrs({$direction: "row"})``;

const Col = styled(List).attrs({$direction: "column"})``;

interface ScrollableListProps {
    fetchItems: () => void
    hasMore: boolean
    length: number
    height?: string
    maxHeight?: string
    endMessage?: ReactNode
    children?: ReactNode
}

const Wrapper = styled.div<{ $height?: string, $maxHeight?: string }>`
    height: calc(${(props) => props.$height});
    max-height: calc(${(props) => props.$maxHeight});
    overflow: auto;
`

const ScrollableList: FC<ScrollableListProps> =
    ({
         fetchItems,
         length,
         hasMore,
         endMessage,
         children,
         height,
         maxHeight,
     }) => {
        if (!length)
            return (<h4>No items</h4>)


        return (
            <Wrapper
                $height={height}
                $max-height={maxHeight}
                id="scrollableDiv"
            >
                <InfiniteScroll
                    dataLength={length}
                    scrollableTarget="scrollableDiv"
                    hasMore={hasMore}
                    next={fetchItems}
                    endMessage={endMessage || <div>no elems</div>}
                    loader={<Loader/>}
                >
                    {children}
                </InfiniteScroll>
            </Wrapper>
        )
    }

export {Row, Col, List, ScrollableList};