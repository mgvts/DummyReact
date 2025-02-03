import {Outlet} from "react-router-dom";
import {FC} from "react";

interface userIndexProps {

}

const usersIndex: FC<userIndexProps> = ({}) => {
    return (
        <>
            <Outlet/>
        </>
    )
};

export default usersIndex;