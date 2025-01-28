import {usePosts} from "../../hooks/domain/usePosts";
import ListLayout from "../../layouts/ListLayout";
import PostInline from "../../components/posts/PostInline";


function PostsPage() {
    return (
            <ListLayout
                domainHook={usePosts}
                ListElement={PostInline}
            />
    );
}

export default PostsPage;
