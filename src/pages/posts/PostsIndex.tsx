import React from "react";
import {Outlet} from "react-router-dom";
import styled from "styled-components";

interface indexProps {

}

// todo: here may add some layout
const PostsWrapper = styled.div`
`

const PostsIndex: React.FC<indexProps> = ({}) => {
    return (
        <PostsWrapper>
            <Outlet />
        </PostsWrapper>
    )
};

export default PostsIndex;