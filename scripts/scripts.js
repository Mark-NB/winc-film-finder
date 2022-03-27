const movieList = document.querySelector('.main__list');
const radioBtns = Array.from(document.querySelectorAll('.nav__btn'));


const moviesToImg = (arg) => {
    return arg.map((item => {
        newImg = document.createElement("img");
        newImg.src = item.poster;
        newImg.id = item.imdbID;
        return newImg;
    }))
};


const addMoviesToDom = (movie) => {
    newLi = document.createElement('li');
    movieList.appendChild(newLi);
    newA = document.createElement('a');
    newLi.appendChild(newA);
    newA.href = `https://www.imdb.com/title/${movie.id}/`;
    newA.appendChild(movie);
};

const clearMoviesinDom = () => {
    currentList = Array.from(document.getElementsByTagName('li', 'img', 'a'));
    currentList.forEach(item => {
        movieList.removeChild(item);
    })
};

const filterMovies = (wordInMovie) => {
    clearMoviesinDom();
    const filterList = movies.filter(item => {
        return item.title.includes(wordInMovie);
    })
    let filterListLi = moviesToImg(filterList);
    filterListLi.forEach(item => {
        addMoviesToDom(item);
    })
};

const filterLatestMovies = () => {
    clearMoviesinDom();
    const filterList = movies.filter(item => {
        return item.year >= 2014;
    })
    let filterListLi = moviesToImg(filterList);
    filterListLi.forEach(item => {
        addMoviesToDom(item);
    })
};

const handleOnChangeEvent = (item) => {
    switch (item.target.value) {
        case 'latest':
            filterLatestMovies();
            break;
        case 'avengers':
            filterMovies('Avengers');
            break;
        case 'xmen':
            filterMovies('X-Men');
            break;
        case 'princess':
            filterMovies('Princess');
            break;
        case 'batman':
            filterMovies('Batman');
            break;
        default:
            console.log('Wrong entry at movie filter!');
    };
};

radioBtns.forEach((item => {
    item.addEventListener('change', (item) => {
        handleOnChangeEvent(item);
    });
}));

const pageLoad = () => {
    startList = moviesToImg(movies);
    startList.forEach(item => {
        addMoviesToDom(item);
    })
};

pageLoad();