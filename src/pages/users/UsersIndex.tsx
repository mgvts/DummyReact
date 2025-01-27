import React from "react";
import {Outlet} from "react-router-dom";

interface userIndexProps {

}

const usersIndex: React.FC<userIndexProps> = ({}) => {
    return (
        <>
            <Outlet/>
        </>
    )
};

export default usersIndex;