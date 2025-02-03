import styled from "styled-components";
import {FC, ReactNode} from "react";

interface CardProps {
    children?: ReactNode;
    $flat?: boolean
}

const CardWrapper = styled.div`
    padding: 20px;
`;

const CardBox = styled.div<Omit<CardProps, 'children'>>`
    padding: 12px;
    border-radius: 20px;

    &:hover {
        box-shadow: ${props => props.$flat
                ? 'none'
                : 'var(--shadow)'};
    }
`;

const Card: FC<CardProps> = ({children, $flat}) => {
    return (
        <CardWrapper>
            <CardBox $flat={$flat}>
                {children}
            </CardBox>
        </CardWrapper>
    );
};


export default Card;