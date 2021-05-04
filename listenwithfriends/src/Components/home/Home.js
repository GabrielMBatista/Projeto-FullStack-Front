import React, { useContext } from 'react'
import { HomeBox } from '../Styled/Styled'
import Search from '../searchSong/SearchSong'
import VideoList from '../playList/SongList'
import Videoplayer from '../playList/VideoPlayer'
import GlobalStateContext from '../../GlobalStates/GlobalStateContext'

function Home() {
  const { states, requests, setters } = useContext(GlobalStateContext);
  console.log(`object`, states.videosMetaInfo)
  return (
    <HomeBox className="App">
      <Videoplayer videoId={states.selectedVideoId} />
      <Search onSearch={requests.onSearch} />
      <VideoList />
    </HomeBox>
  )
}

export default Home


