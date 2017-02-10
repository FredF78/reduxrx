import React from 'react';
import PhotoList from './photo';
import search from './api';


class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.doSearch = this.doSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  doSearch(event) {
    search(this.state.value);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return(<div><span>Sök för bövelen!</span><input onChange={this.handleChange} value={this.state.value} type="text" /><button onClick={this.doSearch} /></div>)
  }
}

export default Searchbar;
