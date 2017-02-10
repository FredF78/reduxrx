export default function fetchPhotosAction (photos) {
  const ret = {
    type: 'PHOTOS_FETCHED',
    payload: photos
  }
  return ret;
}
