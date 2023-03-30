let api = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All");
let link = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

let container = document.querySelector(".container");

api
  .then((response) => {
    return response.json();
  })
  .then((info) => {
    let data = info.Search;
    // console.log(data);

    container.innerHTML = "";

    data.forEach((elem) => {
      //   console.log(elem);
      //   console.log(elem.Title);

      container.innerHTML += `
    <div class="movie">
        <img
          src="${elem.Poster}"
          alt=""
          width="300"
          height="390"
        />
        <h4>${elem.Title}</h4>
        <p>${elem.Year}</p>
      </div>`;
    });
  });

let search = document.querySelector(".search");
let searchbtn = document.querySelector(".search1");

function look() {
  let see = fetch(link);
  container.innerHTML = "";

  see
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      let data = info.Search;

      data.forEach((a) => {
        let title = a.Title.toLowerCase();
        let ser = search.value.toLowerCase();
        let year = a.Year;
        if (title.includes(ser) || year.includes(ser)) {
          //   container.innerHTML = "";
          container.innerHTML += `<div class="movie">
          <img
            src="${a.Poster}"
            alt=""
            width="300"
            height="390"
          />
          <h4>${a.Title}</h4>
          <p>${a.Year}</p>
        </div>`;
        }
      });
    });
}

search.addEventListener("input", look);
search.addEventListener("click", look);

// look();
