import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {PostService} from "../../api/PostService";
import {UserService} from "../../api/UserService";
import InfoLayout from "../../layouts/InfoLayout";
import {useResource} from "../../hooks/core/useResource";
import {usePaginatedResource} from "../../hooks/core/usePaginatedResource";
import PostInline from "../../components/posts/PostInline";
import UserInfo from "../../components/users/UserInfo";

interface UsersIdProps {

}

const UsersId: FC<UsersIdProps> = ({}) => {
    const {id} = useParams();
    const userInfo = useResource(
        (id) => UserService.getById(id),
    );

    const postsList = usePaginatedResource(
        async (params) => {
            const response = await PostService.getByUserId(id!, params)
            return {
                data: response.posts,
                total: response.info.total,
            }
        },
        {enableSearch: false}
    );

    useEffect(() => {
        const initFetcher = async () => {
            if (id) await userInfo.fetchData(id)
        }
        initFetcher()
    }, []);

    return (
        <InfoLayout
            infoHook={() => ({
                isLoading: userInfo.isLoading,
                error: userInfo.error,
                data: userInfo
            })}
            listHook={() => postsList}
            InfoComponent={<UserInfo
                user={userInfo.data}
            />}
            ListComponent={PostInline}
            dependencies={[id]}
            emptyListMsg='No posts yet'
        />
    )
};

export default UsersId;