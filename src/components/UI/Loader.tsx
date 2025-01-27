import styled from "styled-components";
import React from "react";
import {Row} from "./List";

interface LoaderProps {
}

const LoaderWrapper = styled.span`
    width: 48px;
    height: 48px;
    border: 5px solid #000;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

const Loader: React.FC<LoaderProps> = () => {
    // 68 to prevent additional scroller in list also 48*sqrt(2)
    return <Row $align='center' $justify='center' style={{height:'68px', }}>
        <LoaderWrapper />
    </Row>
}
export default Loader