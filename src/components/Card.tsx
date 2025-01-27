import React from "react";
import styled from "styled-components";

interface CardProps {
    children?: React.ReactNode;
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

const Card: React.FC<CardProps> = ({children, $flat}) => {
    return (
        <CardWrapper>
            <CardBox $flat={$flat}>
                {children}
            </CardBox>
        </CardWrapper>
    );
};


export default Card;