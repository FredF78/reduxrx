import React from 'react';
import Photo from './photo';

class PhotoList extends React.Component {
  render() {
    const photolist = this.props.photos.map((photo) =>
      <Photo key={photo.id} src={photo.src}></Photo>
    );
    return (<li><ul>{photolist}</ul></li>)
  }
}

export default PhotoList;