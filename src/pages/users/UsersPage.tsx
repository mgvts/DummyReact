import type {FC} from "react";
import {useUsers} from "../../hooks/domain/useUsers";
import ListLayout from "../../layouts/ListLayout";
import UserInline from "../../components/users/UserInline";



const UsersPage: FC = ({}) => {
    return (
        <ListLayout
            domainHook={useUsers}
            ListElement={UserInline}
        />
    )
};

export default UsersPage;