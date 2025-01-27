import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useFetching} from "../../hooks/useFetching";
import {UserService} from "../../api/UserService";
import UsersList from '../../components/UsersList'

interface UsersProps {

}

const UsersWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
const Users: React.FC<UsersProps> = ({}) => {
    const [users, setUsers] = useState(
        []
    );
    const [page, setPage] = React.useState(1);
    const [total, setTotal] = React.useState(-1);

    const [fetchUsers, isUsersLoading, userError] = useFetching(async (limit: number, skip: number) => {
        const response = await UserService.getAll({limit, skip});
        setUsers([...response.users])
        setTotal(response.info.total)
    })

    useEffect(() => {
        fetchUsers(20, (page - 1) * 20)
    }, [page]);
    return (
        <UsersWrapper>
            <UsersList users={users}/>
        </UsersWrapper>
    )
};

export default Users;