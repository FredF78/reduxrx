import React from 'react';
import PhotoList from './photolist';
import Searchbar from './searchbar';

class PhotoApp extends React.Component {
  
  render() {
    const photolist = this.props.photos;
    return (<div><div><Searchbar /></div>
    <div><PhotoList photos={photolist}></PhotoList></div></div>)
  }
}

export default PhotoApp;