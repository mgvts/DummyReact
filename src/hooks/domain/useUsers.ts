import {usePaginatedResource} from "../core/usePaginatedResource";
import {UserService} from "../../api/UserService";

export const useUsers = () => {
    return usePaginatedResource(
        async (params, query) => {
            const response = query
                ? await UserService.getSearch(query, params)
                : await UserService.getAll(params);

            return {
                data: response.users,
                total: response.info.total,
            };
        }
    );
};