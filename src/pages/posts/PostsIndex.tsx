import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {FC} from "react";

interface indexProps {

}

// todo: here may add some layout
const PostsWrapper = styled.div`
`

const PostsIndex: FC<indexProps> = ({}) => {
    return (
        <PostsWrapper>
            <Outlet />
        </PostsWrapper>
    )
};

export default PostsIndex;