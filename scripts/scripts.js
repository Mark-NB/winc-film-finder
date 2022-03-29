//constants
const movieList = document.querySelector('.main__list');
const radioBtns = Array.from(document.querySelectorAll('.nav__btn'));
const searchForm = document.querySelector('.nav__search-form');
const searchQuery = document.querySelector('.nav__search');




//functions
//function that grabs movies based on provided array as arg, also adds IMDB id to img for reference
const moviesToImg = (arg) => {
    return arg.map((item => {
        newImg = document.createElement("img");
        newImg.src = item.poster;
        newImg.id = item.imdbID;
        newImg.classList.add('main__img');
        return newImg;
    }))
};

//function that adds movies to dom, takes a movie object as arg, creates nested structure, and adds attributes
const addMoviesToDom = (movie) => {
    newLi = document.createElement('li');
    newLi.classList.add('main__list-item');
    movieList.appendChild(newLi);
    newA = document.createElement('a');
    newA.classList.add('main__link');
    newA.href = `https://www.imdb.com/title/${movie.id}/`;
    newLi.appendChild(newA);
    newA.appendChild(movie);
};

const clearMoviesinDom = () => {
    currentList = Array.from(document.getElementsByTagName('li', 'img', 'a'));
    currentList.forEach(item => {
        movieList.removeChild(item);
    })
};

const clearRadioButtons = () => {
    radioBtns.forEach(item => {
        item.checked = false;
    })
};

//filters movies based on arg wordInMovie, then uses moviesToImg and addMoviesToDom
const filterMovies = (wordInMovie) => {
    clearMoviesinDom();
    const filterList = movies.filter(item => {
        return (item.title.includes(wordInMovie));
    })
    let filterListLi = moviesToImg(filterList);
    filterListLi.forEach(item => {
        addMoviesToDom(item);
    })
};

//filters movies based on release date, then uses moviesToImg and addMoviesToDom
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

//turning the search word into first letter uppercase and dealing with some x-men edge cases, then calling filtermovies with searchword as argument
const searchToMovieSearchWord = (search) => {
    search.preventDefault();
    let searchWord = searchQuery.value.toLowerCase();
    if (searchQuery.value === 'x-men' || searchQuery.value === 'xmen' || searchQuery.value === 'X-men') {
        searchWord = 'X-Men';
    } else searchWord = searchWord.charAt(0).toUpperCase() + searchWord.slice(1);
    filterMovies(searchWord);
    clearRadioButtons();
};

//triggers desired function based on radio button input
const filterSelectionChangeEvent = (item) => {
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




//event listeners
radioBtns.forEach((item => {
    item.addEventListener('change', (item) => {
        filterSelectionChangeEvent(item);
    });
}));

searchForm.addEventListener('submit', (event) => {
    searchToMovieSearchWord(event);
});




//initial page load shows all movies
const pageLoad = () => {
    startList = moviesToImg(movies);
    startList.forEach(item => {
        addMoviesToDom(item);
    })
};

pageLoad();