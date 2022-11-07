// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "1afa0d0c22msh9ca3c1a4e25e9f1p1e1335jsn5cc8b3896228",
//     "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
//   },
// };

const mainContainer = document.querySelector(".container");
const mainContainerInside = document.querySelector(".row");
const AddSongBtn = document.querySelector(".add-song");
const songTitles = document.querySelector(".modal-body");

window.onload = function () {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
    .then((response) => response.json())
    .then((data) => {
      const album = data.data;
      for (let song of album) {
        // console.log(song);
        mainContainerInside.innerHTML += `<div class="col-6 col-md-4 col-lg-3 col-xl-2">
      <div class="card" >
      <img src=${song.album.cover} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${song.title}</h5>
        <h5 class="card-title">${song.artist.name}</h5>
      </div>
    </div></div>`;

        AddSongBtn.addEventListener("click", () => {
          console.log(song.title);
          const list = document.createElement("ul");
          list.textContent += song.title;
          songTitles.append(list);
        });
      }

      console.log(album);
    })

    .catch((err) => console.error(err));
};
