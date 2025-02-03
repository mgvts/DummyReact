import {Col, ScrollableList} from "../UI/List";
import CommentInline from "./CommentInline";
import {Comment} from "../../api/types";
import {FC} from "react";

interface CommentListProps {
    comments: Comment[]
    fetchComments?: (..._: any[]) => void
    hasMore?: boolean
}


const POST_HEADER_SIZE = '100px'

const CommentList: FC<CommentListProps> = ({
                                               comments,
                                               fetchComments,
                                               hasMore,
                                           }) => {
    if (!comments.length)
        return (<h4>No Comments</h4>)

    return (
        <ScrollableList
            length={comments.length}
            hasMore={!!hasMore}
            maxHeight={`100vh - ${POST_HEADER_SIZE}`}
            fetchItems={fetchComments || (()=>{})}
            endMessage={<div/>}
        >
            <Col>
                {comments.map((c) =>
                    <CommentInline
                        comment={c}
                        key={c.id}
                    />
                )}
            </Col>
        </ScrollableList>
    )
};

export default CommentList;