import React, {ReactNode} from "react";
import PostInline from "./PostInline";
import styled from "styled-components";
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from "../UI/Loader";
import {Col, Row} from "../UI/List";
import {ScrollableList} from "../UI/List";
import {Post} from "../../api/types";

interface PostListProps {
    posts: Post[]
    fetchPosts: (..._: any[]) => void
    hasMore: boolean
    endMessage?: ReactNode
}


const POSTS_HEADER_SIZE = '100px'

const PostListWrapper = styled.div`
    height: calc(100vh - ${POSTS_HEADER_SIZE});
    overflow: auto;
    margin-top: 10px;
`

const PostList: React.FC<PostListProps> = ({posts, fetchPosts, hasMore, endMessage}) => {
    if (!posts.length)
        return (<h4>No posts</h4>)

    return (
        <ScrollableList
            length={posts.length}
            hasMore={hasMore}
            height={`100vh - ${POSTS_HEADER_SIZE}`}
            fetchItems={fetchPosts}
            endMessage={endMessage}
        >
            <Col>
                {posts.map((post, index) =>
                    <PostInline
                        post={post}
                        key={post.id}
                    />
                )}
            </Col>
        </ScrollableList>
    )
};

export default PostList;