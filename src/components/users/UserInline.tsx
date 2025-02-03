import {FC} from "react";
import {User} from "../../api/types";
import {Link} from "react-router-dom";
import styled from "styled-components";
import Card from "../Card";

interface UserInlineProps {
    data: User
}

const Body = styled.div`
`
const UserInline: FC<UserInlineProps> = ({data: user}) => {
    return (
        <Card>
            <Link to={`/users/${user.id}`}>
                <span className='link-animate'>
                    {user.firstName}&nbsp;{user.lastName}&nbsp;[{user.username}]
                </span>
            </Link>
            <Body>
                <div>{user.age} yo</div>
                <div>{user.company.name}</div>
                <div>{user.address.country}</div>
            </Body>
        </Card>
    )
};

export default UserInline;