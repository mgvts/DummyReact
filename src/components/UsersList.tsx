import React from "react";
import {User} from "../types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {relative} from "../util/relative";

interface UsersListProps {
    users: User[];
}

const UsersListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: black;
`
const UserInline = styled.div`
    border: thin solid gray;
    padding: 10px 20px;
`

const UsersList: React.FC<UsersListProps> = ({users, ...rest}) => {
    return (
        <UsersListWrapper>
            {users.map((user, index) => (
                <UserInline key={user.id}>
                    <div>
                        <div>
                            {user.username}
                            <div>id:
                                <Link to={relative(`/${user.id}`)}>
                                    {user.id}
                                </Link>
                            </div>
                        </div>
                    </div>
                </UserInline>
            ))}
        </UsersListWrapper>
    )
};

export default UsersList;