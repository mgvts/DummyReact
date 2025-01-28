import {FC} from "react";
import styled from "styled-components";

interface ErrorProps {
    message: string | null;
}

const ErrorWrapper = styled.div`
    color: red;
`

const Error: FC<ErrorProps> = ({message}) => {
    return (
        <ErrorWrapper>
            {message}
        </ErrorWrapper>
    )
};

export default Error;