import React, {useState} from "react"
import TextField from '@mui/material/TextField'
import styled from "styled-components"
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const SearchWrapper = styled.div`
    max-width: 80%;
    margin: auto;
`;

export default function Search (props) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === 13){
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        props.onSubmit(searchTerm)
    }

    return (
        <SearchWrapper>
            <TextField 
                label="Enter a word"
                variant="outlined" 
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <IconButton onClick={handleSubmit}>
                <SearchIcon fontSize="large"/>
            </IconButton>
        </SearchWrapper>
    )
}