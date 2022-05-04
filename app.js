let api = "http://www.omdbapi.com/?i=tt3896198&apikey=8ee7393f";
const searchList = document.getElementsByClassName("searchList");
const inputValue = document.getElementById("inputValue");

inputValue.addEventListener("keyup", (e) => {
  if (e.key == "Enter" && inputValue !== "") {
    loadMovies(inputValue.value);
  }
});

async function loadMovies(searchTerm) {
  const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=8ee7393f&s=${searchTerm}`;
  const res = await fetch(URL);
  const data = await res.json();
  if (data.Response == "True") {
    showMovies(data.Search);
  } else {
    alert("Error in database, try again");
  }
}

function showMovies(data) {
  searchList.innerHTML = "";

  data.forEach((movie) => {
    const { Title, Type, Poster } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("main");
    movieEl.innerHTML = `
             <img src="${
               Poster !== "N/A" ? Poster : "http://via.placeholder.com/400"
             }">
     <div class="description">
          <h2 class="title">${Type}</h2>
          <p class="type">${Title}</p>
        </div>
        `;

    searchList[0].appendChild(movieEl);
  });
}
