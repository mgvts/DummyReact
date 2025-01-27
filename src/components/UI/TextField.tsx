import type {FC} from "react";
import styled from "styled-components";
import {InputProps} from "../../types";
import {Col} from "./List";


interface TextFieldProps {
    value: string
    onChange: (value: string) => void
}

const TextFieldWrapper = styled(Col).attrs({ $align: "center", $justify: "center" })`
    width: 100%;
    height: 24px;
    padding: 4px 8px;
    border: 1px solid lightgrey;
    border-radius: 10px;
    transition: border-color 0.2s ease;

    &:hover {
        background: white;
    }

    &:focus-within {
        border-color: green;
    }
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    background: inherit;
`;

const Input = styled.input`
  width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: inherit;
`;


const TextField: FC<InputProps<TextFieldProps>> = ({value, onChange, ...rest}) => {
    return (
        <TextFieldWrapper>
            <InputWrapper>
                <Input
                    title="todo: fix sizes"
                    {...rest}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </InputWrapper>
        </TextFieldWrapper>
    )
};

export default TextField;