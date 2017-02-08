import React from 'react';
import Photo from './photo';

class PhotoList extends React.Component {
  render() {
    const photolist = this.props.photos.map((photo) => 
      <Photo key={photo.id} src={photo.src}></Photo>
    );
    return (<ul>{photolist}</ul>)
  }
}

export default PhotoList;