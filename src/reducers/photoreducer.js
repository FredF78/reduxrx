export function setPhotos (state, action) {
  switch (action.type) {
  case 'PHOTOS_FETCHED':
    return Object.assign({}, state, {
      photos: action.payload
    })
  default:
    return state;
  }
}
