export default function search(searchQuery) {
  return fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1ce8eb8a42ae3e5141ba609e0591a375&tags=" + searchQuery + "&format=json&nojsoncallback=1")
  .then(data => data.json())
  .then(photos => {
    console.log("photos", photos.photos.photo);
    return photos.photos.photo.map((photo) => {
      return {src: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`, id: photo.id}
    })
    .filter((photo, id) => {
      return (id < 20);
    })
  })
  .catch(err => {
    console.error(err)
  });
}
