import {AiFillLike, AiOutlineLike} from "react-icons/ai";
import styled from "styled-components";
import {Row} from "./List";
import {FC, useState} from "react";

interface LikeProps {
    value: number
}

const LikeWrapper = styled(Row).attrs({$align: "center", $gap: '4px', $justify: 'center'})`
    font-weight: 500`

const Like: FC<LikeProps> = ({value}) => {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <LikeWrapper title="No backend effect">
            <div style={{height: 'fit-content'}}>
                {value + +isLiked}
            </div>
            <div
                style={{cursor: 'pointer', display: 'flex'}}
                onClick={() => setIsLiked(l => !l)}>
                {
                    isLiked
                        ? <AiFillLike size={21}/>
                        : <AiOutlineLike size={21}/>
                }
            </div>
        </LikeWrapper>
    )
};

export default Like;