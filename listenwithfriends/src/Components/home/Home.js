import React from 'react'
import SongList from '../playList/SongList'
import { HomeBox } from '../Styled/Styled'
import youtubeApi from '../../Api/youtube'
import Search from '../searchSong/SearchSong'


export default class Home extends React.Component {

    state = {
        videosMetaInfo: [],
        selectedVideoId: null
    };
    onSearch = async keyword => {
        const response = await youtubeApi.get("/search", {
          params: {
            q: keyword
          }
        });
        this.setState({
          videosMetaInfo: response.data.items,
          selectedVideoId: response.data.items[0].id.videoId
        });
        console.log(this.state);
      };

    render() {
        return (
            <HomeBox className="App">
                <SongList />
                <Search onSearch={this.onSearch}/>
            </HomeBox>

        );
    }

}

