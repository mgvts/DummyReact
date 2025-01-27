import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import {PostService} from "../../api/PostService";
import {UserService} from "../../api/UserService";
import Loader from "../../components/UI/Loader";
import PostList from "../../components/posts/PostList";
import {FullUser, Post} from "../../api/types";
import {Nullable} from "../../types";

interface UsersIdProps {

}

const UsersId: React.FC<UsersIdProps> = ({}) => {
    const params = useParams();
    const [user, setUser] = useState<Nullable<FullUser>>(null);
    const [userPosts, setUserPosts] = useState<Post[]>([]);

    const [fetchUserById, isLoadingUser] = useFetching(async (id: string) => {
        const user = await UserService.getById(id);
        setUser(user);
    });
    const [fetchPosts, isLoadingPosts] = useFetching(async (id: string) => {
        const response = await PostService.getByUserId(id);
        setUserPosts(response.posts);
    });
    useEffect(() => {
        if (params.id) {
            fetchUserById(params.id);
            fetchPosts(params.id)
        }
    }, [params.id]);

    return (
        <div>
            <h1>User ID: {params.id}</h1>
            {isLoadingUser || !user ?
                <Loader/>
                : (
                    <div>
                        <div>
                            <ul>
                                <li>
                                    id: {user.id}
                                </li>
                                <li>
                                    name: {user.firstName} {user.lastName}
                                </li>
                                <li>
                                    username: {user.username}
                                </li>
                            </ul>
                        </div>
                        <h3>Posts</h3>
                        <div>
                            <PostList
                                posts={userPosts}
                                fetchPosts={() => {
                                }}
                                hasMore={false}
                                endMessage={<div/>}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default UsersId;