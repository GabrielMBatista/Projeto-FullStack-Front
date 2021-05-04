import React from "react";
import { SearchInput, SearchSongBox } from "../Styled/Styled";

class Search extends React.Component {
  
  state = { title: "" };
  onSearchChanged = event => {
    const _title = event.target.value;
    this.setState({ title: _title });
  };
  onSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.title);
  };

  render() {
    return (
      <>
        <SearchSongBox onSubmit={this.onSubmit} className="search-form">
          <div className="form-controls">
            <label>Search Your Music</label>
            <SearchInput
              id="video-search"
              type="text"
              value={this.state.title}
              onChange={this.onSearchChanged}
              placeholder="Enter Search Keyword"
            />
          </div>
        </SearchSongBox>
      </>
    );
  }
}

export default Search;