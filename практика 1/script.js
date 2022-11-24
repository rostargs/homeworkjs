let numberOfFilms = +prompt('Скільки фільмів ви вже дивилися', '7');



let personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: '',
    genders: [],
    privat: false 
}

let questionFirst = prompt('Один із останніх переглянутих фільмів?', '');
let questionSecond = +prompt('На скільки оціните його?', '');
let questionThird = prompt('Один із останніх переглянутих фільмів?', '');
let questionFourth = +prompt('На скільки оціните його?', '');

personalMovieDB.movies[questionFirst] = questionSecond;
personalMovieDB.movies[questionThird] = questionFourth;


console.log(personalMovieDB);