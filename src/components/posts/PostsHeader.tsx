import {useState, KeyboardEvent} from "react";
import type {FC} from "react"
import TextField from "../UI/TextField";
import {SortPostOption} from "../../types";
import {Col} from "../UI/List";
import styled from "styled-components";
import Chip from "../UI/Chip";


interface PostsHeaderProps {
    // sortOption: SortPostOption;
    query?: string
    setQuery: (query: string) => void
    onChange?: (query: string) => void
    total?: number
}

const HeaderWrapper = styled(Col).attrs({$gap: "20px"})`
    padding: 20px;
    border: thin solid lightgrey;
    border-top: none;
    border-radius: 0 0 10px 10px;
`

const PostsHeader: FC<PostsHeaderProps> = ({query, setQuery, onChange, total}) => {
    const [localQuery, setLocalQuery] = useState('');

    const handleEnter = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            return setQuery(localQuery);
        }
    }

    return (
        <HeaderWrapper>
            <TextField
                placeholder="query..."
                value={localQuery}
                onChange={setLocalQuery}
                onKeyDown={handleEnter}
            />
            <div>
                <Chip value={total || 0} title="Total posts"/>
            </div>
        </HeaderWrapper>
    )
};

export default PostsHeader;