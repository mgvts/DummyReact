import React from "react";
import styled from "styled-components";

interface ChipProps {
    value: string | number
    title?: string
}

const ChipWrapper = styled.span`
    border-radius: 14px;
    margin: auto;
    padding: 2px 12px;
    height: 28px;
    background: green;
    width: fit-content;
    vertical-align: baseline;
    font-weight: 500;
    color: white;
`

const Chip: React.FC<ChipProps> = ({value, title}) => {
    return (
        <ChipWrapper title={title}>
            {value}
        </ChipWrapper>
    )
};

export default Chip;