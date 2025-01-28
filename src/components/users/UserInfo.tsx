import React, {FC} from "react";
import {FullUser} from "../../api/types";
import Card from "../Card";
import {Nullable} from "../../types";
import Loader from "../UI/Loader";

interface UserInfoProps {
    user: Nullable<FullUser>
}

const UserInfo: FC<UserInfoProps> = ({user}) => {
    if (!user) return <Loader/>
    return (
        <Card $flat>
            <div>
                {user.username}
            </div>
            <div>
                {JSON.stringify(user)}
            </div>
        </Card>
    )
};

export default UserInfo;