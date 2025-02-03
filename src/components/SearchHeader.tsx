import {useState, KeyboardEvent} from "react";
import type {FC} from "react"
import TextField from "./UI/TextField";
import {Col} from "./UI/List";
import styled from "styled-components";
import Chip from "./UI/Chip";


interface SearchHeaderProps {
    onSearch?: (query: string) => void
    total?: number
}

const HeaderWrapper = styled(Col).attrs({$gap: "20px"})`
    padding: 20px;
    border: thin solid lightgrey;
    border-top: none;
    border-radius: 0 0 10px 10px;
`

const SearchHeader: FC<SearchHeaderProps> = ({onSearch,  total}) => {
    if (!onSearch) return <div />

    const [localQuery, setLocalQuery] = useState('');

    const handleEnter = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            return onSearch(localQuery);
        }
    }

    return (
        <HeaderWrapper>
            <TextField
                type="search"
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

export default SearchHeader;