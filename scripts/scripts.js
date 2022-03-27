const movieList = document.querySelector('.main__list');

const addMoviesToDom = (movie) => {
    movieList.appendChild(movie);
};


const movieLiArray = movies.map((item => {
    newImg = document.createElement("img");
    newImg.src = item.poster;
    return newImg;
}))

movieLiArray.forEach(addMoviesToDom);

console.log(movieLiArray);

//movieLiArray.forEach(addMoviesToDom);

