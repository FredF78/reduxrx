import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo';
import PhotoList from './photolist';

let photos = [
  {id: "2", src: "http://kapstaden.nu/wp-content/uploads/TopSlide/St-James2-1010x421.jpg"},
  {id: "5", src: "http://www.studin.se/wp-content/uploads/2015/07/cape-town-4.jpg"},
  {id: "6", src: "http://kapstaden.nu/wp-content/uploads/images/table-mountain.jpg"}
];

ReactDOM.render(<PhotoList photos={photos}></PhotoList>, document.getElementById("main"));