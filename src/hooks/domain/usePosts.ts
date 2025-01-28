import {usePaginatedResource} from "../core/usePaginatedResource";
import {PostService} from "../../api/PostService";

export const usePosts = () => {
    return usePaginatedResource(
        async (params, query) => {
            const response = query
                ? await PostService.getQueryPosts(query, params)
                : await PostService.getAll(params);

            return {
                data: response.posts,
                total: response.info.total,
            };
        }
    );
};