import {useParams} from "react-router-dom";
import {PostService} from "../../api/PostService";
import InfoLayout from "../../layouts/InfoLayout";
import {useResource} from "../../hooks/core/useResource";
import {usePaginatedResource} from "../../hooks/core/usePaginatedResource";
import CommentInline from "../../components/comments/CommentInline";
import PostInfo from "../../components/posts/PostInfo";
import {useEffect} from "react";
import {UserService} from "../../api/UserService";


const PostId = () => {
    const {id} = useParams();
    const postInfo = useResource(
        (id) => PostService.getById(id),
    );

    const commentsList = usePaginatedResource(
        async (params) => {
            const response = await PostService.getComments(id!, params)
            return {
                data: response.comments,
                total: response.info.total,
            }
        },
        {enableSearch: false}
    );

    const userInfo = useResource(
        (userId) => UserService.getById(userId),
    );

    useEffect(() => {
        const initFetcher = async () => {
            if (id) {
                const post = await postInfo.fetchData(id)
               await userInfo.fetchData(`${post.userId}`)
            }
        }
        initFetcher()
    }, []);

    return (
        <InfoLayout
            infoHook={() => ({
                isLoading: postInfo.isLoading && userInfo.isLoading,
                error: postInfo.error && userInfo.error,
                data: {post: postInfo.data, user: userInfo.data}
            })}
            listHook={() => commentsList}
            InfoComponent={<PostInfo
                post={postInfo.data}
                user={userInfo.data}
            />}
            ListComponent={CommentInline}
            dependencies={[id]}
            emptyListMsg='No comments yet.'
        />
    );
};

export default PostId;
