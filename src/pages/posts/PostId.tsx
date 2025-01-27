import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import {PostService} from "../../api/PostService";
import Loader from "../../components/UI/Loader";
import CommentList from "../../components/comments/CommentList";
import {Row} from "../../components/UI/List";
import Chip from "../../components/UI/Chip";
import {UserService} from "../../api/UserService";
import {FullPost, FullUser, Comment} from "../../api/types";
import {Nullable} from "../../types";
import Card from "../../components/Card";



const PostDetails: React.FC<{ post: FullPost, user: FullUser }> = ({post, user}) => (
    <Card $flat={true}>
        <Link to={`/users/${user.id}`}>
            <span className="link-animate">
                {user.username}
            </span>
        </Link>

        <h2>{post.title}</h2>
        <p>
            {post.body}
        </p>
        <Row>
            <div>
                react: {post.reactions.likes} + | {post.reactions.dislikes} -
            </div>
            <div>
                views: {post.views}
            </div>
            <div>
                tags: {post.tags.map((t, ind) => <Chip value={t} key={ind}/>)}
            </div>
        </Row>
    </Card>
);


const PostId = () => {
    const params = useParams();
    const [post, setPost] = useState<Nullable<FullPost>>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [user, setUser] = useState<FullUser>()

    const [fetchPostById, isLoadingPost] = useFetching(async (id: string) => {
        const post = await PostService.getById(id);
        setPost(post);
    });

    const [fetchCommentsByPost, isLoadingComments] = useFetching(
        async (id: string) => {
            const {comments} = await PostService.getComments(id)
            setComments(comments);
        }
    );
    const [fetchUser, isLoadingUser] = useFetching(
        async (id: string) => {
            const user = (await UserService.getById(id));
            setUser(user)
        }
    );

    useEffect(() => {
        if (params.id) {
            fetchPostById(params.id);
            fetchCommentsByPost(params.id);
        }
    }, [params.id]);
    useEffect(() => {
        if (post) {
            fetchUser(post.userId);
        }
    }, [post]);

    return (
        <div>
            <h1>Post ID: {params.id}</h1>
            {isLoadingPost || isLoadingUser || !post || !user ? (
                <Loader/>
            ) : (
                <>
                    <PostDetails post={post} user={user}/>
                    {isLoadingComments
                        ? <Loader/>
                        : <CommentList
                            comments={comments}
                        />
                    }
                </>
            )}
        </div>
    );
};

export default PostId;
