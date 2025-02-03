import type {Comment} from "../../api/types";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Card from "../Card";
import {Row} from "../UI/List";
import Like from "../UI/Like";
import Loader from "../UI/Loader";

interface CommentInlineProps {
    data: Comment
}

const CommentWrapper = styled(Card)`
`
const CommentBody = styled.div`
    padding-top: 12px;
`
const CommentFooter = styled(Row).attrs({$align: "center"})`
    width: 100%;
    padding-top: 12px;
    & span {
        gap: 4px;
        display: flex;
        align-items: center;
    }
`

const CommentInline: FC<CommentInlineProps> = ({data: comment,}) => {
    if (!comment) return <Loader/>;
    return (
        <CommentWrapper>
            <Link to={`/users/${comment.user.id}`}>
                <span className="link-animate">{comment.user.username}:</span>
            </Link>
            <CommentBody>
                {comment.body}
            </CommentBody>
            <CommentFooter>
                <span>
                    <Like value={comment.likes} />
                </span>
            </CommentFooter>
        </CommentWrapper>
    )
};

export default CommentInline;