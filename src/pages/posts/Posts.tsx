import {use, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {PostService} from "../../api/PostService";
import PostsHeader from "../../components/posts/PostsHeader";
import Loader from "../../components/UI/Loader";
import PostList from "../../components/posts/PostList";
import {Post} from "../../api/types";

const PostsWrapper = styled.div`
    height: 100vh;
    overflow: hidden;
`;

const POSTS_BATCH_SIZE = 20;
const BASE_PARAMS = (page: number) => ({limit: POSTS_BATCH_SIZE, skip: POSTS_BATCH_SIZE * page});

function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [isPostsLoading, setIsPostsLoading] = useState(false);
    const [query, setQuery] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [total, setTotal] = useState(0)

    const fetchPosts = useCallback(async (currentPage = page) => {
        setIsPostsLoading(true);
        setError(null);
        try {
            const response = await PostService.getAll(BASE_PARAMS(currentPage));
            setPosts((prevPosts) => [...prevPosts, ...response.posts]);
            setTotal(response.info.total)
            if (response.info.total <= posts.length + response.posts.length) {
                setHasMore(false);
            }
        } catch (err) {
            setError("Не удалось загрузить данные. Попробуйте позже.");
        } finally {
            setIsPostsLoading(false);
        }
    }, [page, posts?.length]);

    useEffect(() => {
        fetchPosts(0);
    }, []);

    useEffect(() => {
        const fetchQueryPosts = async () => {
            setIsPostsLoading(true);
            try {
                const response = await PostService.getQueryPosts(query, BASE_PARAMS(0));
                console.log(response)
                setPosts(response.posts);
                setTotal(response.info.total)
                setHasMore(response.info.total > response.posts.length);
                setPage(1);
            } catch (err) {
                setError("Не удалось загрузить результаты поиска.");
            } finally {
                setIsPostsLoading(false);
            }
        };

        fetchQueryPosts()
    }, [query]);

    return (
        <PostsWrapper>
            <PostsHeader
                query={query}
                setQuery={setQuery}

                total={total}
            />
            {error && <div>{error}</div>}
            {isPostsLoading && posts.length === 0 ? (
                <Loader/>
            ) : (
                <PostList
                    hasMore={hasMore}
                    fetchPosts={fetchPosts}
                    posts={posts}
                />
            )}
        </PostsWrapper>
    );
}

export default Posts;
