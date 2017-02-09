import React from 'react';
import ReactDOM from 'react-dom';

import PhotoApp from './photoapp';

let photolist = [
  {id: "2", src: "http://kapstaden.nu/wp-content/uploads/TopSlide/St-James2-1010x421.jpg"},
  {id: "5", src: "http://www.studin.se/wp-content/uploads/2015/07/cape-town-4.jpg"},
  {id: "6", src: "http://kapstaden.nu/wp-content/uploads/images/table-mountain.jpg"}
];

ReactDOM.render(<PhotoApp photos={photolist}></PhotoApp>, document.getElementById("main"));