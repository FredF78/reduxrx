import React from 'react';

class Photo extends React.Component {
  render() {
    return <img alt={this.props.caption} src={this.props.src} width="640" />;
  }
}

export default Photo