import {usePaginatedResource} from "../core/usePaginatedResource";
import {PostService} from "../../api/PostService";
import {Post} from "../../api/types";

export const usePostComments = (postId: Post['id']) => {
    return usePaginatedResource(
        async (params, _) => {
            const response = await PostService.getComments(postId, params)

            return {
                data: response.comments,
                total: response.info.total,
            };
        }
    );
};