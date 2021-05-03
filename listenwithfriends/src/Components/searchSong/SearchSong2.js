import React from 'react'
import { SearchSongBox, SearchInput } from '../Styled/Styled'

function SearchSong() {

    

    return (
        <SearchSongBox>
            {/* <h3>Search a Song</h3> */}
            <SearchInput placeholder='Search a song'></SearchInput>
        </SearchSongBox>
    )
}

export default SearchSong
