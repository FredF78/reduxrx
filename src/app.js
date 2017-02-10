import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs';

import search from './api';
import PhotoApp from './photoapp';
import { setPhotos } from './reducers/photoreducer';
import fetchPhotosAction from './actions/fetchphotos';

const initialState = {};
let photolist = [];

const fetchPromise = search("skiing");
const photos$ = Rx.Observable.fromPromise(fetchPromise);

let action$ = photos$.map(photos => {
  return fetchPhotosAction(photos);
});

action$.map(action => {
  return function(state) {
    return setPhotos(state, action)
  }
}).scan((state, reduce) => {
  return reduce(state);
}, initialState)
.subscribe((state) => {
  ReactDOM.render(<PhotoApp photos={state.photos}></PhotoApp>, document.getElementById("main"));
});


// skapa knapp som tar inputvärdet
// skapa och dispatcha action som representerar "ladda foton" - https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1ce8eb8a42ae3e5141ba609e0591a375&tags=kapstaden&format=json&nojsoncallback=1
// skapa reducer som tar foton och returnerar foton
// skapa storekomponent
// i photolistkomponenten skall mappas till statet som håller bilderna
// skapa en mapstatetoprops-funktion
