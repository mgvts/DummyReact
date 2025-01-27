import React from "react";
import Card from "../Card";
import {Post} from "../../types";
import Btn from "../UI/Btn";
import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";

interface PostInlineProps {
    post: Post
}

const PostTitle = styled.h4`
    width: fit-content;
    margin-top: 0;
    margin-bottom: 10px;
`

const PostBody = styled.div`
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`

const PostInline: React.FC<PostInlineProps> = ({post}) => {
    const navigate = useNavigate()
    return (
        <Card>
            <Link
                style={{width: 'fit-content'}}
                to={`/posts/${post.id}`}
            >

                <PostTitle className="link-animate">
                    {post.title}
                </PostTitle>
            </Link>


            <PostBody>
                {post.body}
            </PostBody>
            {/*<div>*/}
            {/*<Btn*/}
            {/*    text="Open"*/}
            {/*    variant="primary"*/}
            {/*    onClick={}*/}
            {/*/>*/}
            {/*</div>*/}
        </Card>
    )
};

export default PostInline;