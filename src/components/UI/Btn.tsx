import styled from "styled-components";
import React from "react";
import { ButtonProps } from "../../types";

interface BtnWrapperProps {
    variant?: "primary" | "normal";
    onClick?: (e?: React.MouseEvent) => void;
    size?: "small" | "medium" | "large"; // Размер кнопки
}

interface BtnProps extends BtnWrapperProps {
    text: string;
}

const sizeStyles = {
    small: `
    padding: 5px 10px;
    font-size: 12px;
  `,
    medium: `
    padding: 10px 20px;
    font-size: 16px;
  `,
    large: `
    padding: 15px 30px;
    font-size: 20px;
  `,
};

const BtnWrapper = styled.button<ButtonProps<BtnWrapperProps>>`
    display: inline-block;
    border-radius: 5px;
    border: 2px solid transparent;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    background-color: ${(props) =>
            props.variant === "primary" ? "#007BFF" : "#f8f9fa"};
    color: ${(props) => (props.variant === "primary" ? "#fff" : "#333")};

    &:hover {
        background-color: ${(props) =>
                props.variant === "primary" ? "#0056b3" : "#e2e6ea"};
        border-color: ${(props) =>
                props.variant === "primary" ? "#0056b3" : "#ccc"};
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 5px
        ${(props) => (props.variant === "primary" ? "#0056b3" : "#ccc")};
    }

    ${(props) => sizeStyles[props.size || "medium"]}; // Применение стилей для размера
`;

const Btn: React.FC<ButtonProps<BtnProps>> = ({
                                                  text,
                                                  size = "medium",
                                                  variant = "primary",
                                                  onClick,
                                                  ...rest
                                              }) => {
    return (
        <BtnWrapper size={size} variant={variant} onClick={onClick} type="button" {...rest}>
            {text}
        </BtnWrapper>
    );
};

export default Btn;
