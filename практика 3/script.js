'use strict';
let numberOfFilms;

let personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false 
}

function start(){
    numberOfFilms = +prompt('Скільки фільмів ви вже дивилися', '7');
    while(numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)){

    }
}

start();
function rememberMyFilms(){
for(let i =0; i < numberOfFilms;i++){
    const a = prompt('Один з останніх переглянутих фільмів?'),
          b = prompt('На скільки оціните його?');

    if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
       personalMovieDB.movies[a] = b;
   }else {
       console.log('Error');
       i--;
   }
}
}  
rememberMyFilms();

function detectPersonalLevel(){
    
    if(numberOfFilms <= 10){
        console.log('Ви переглянули мало фільмів');
    }else if(numberOfFilms > 10 && numberOfFilms <=30){
        console.log('Ви класичний глядач');
    }else if(numberOfFilms < 0){
        console.log('Трапилась помилка!')
    }
    else{
        console.log('Ви кіноман!');
    }
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
       console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGender(){
    for( let i = 1; i < 3;i++){
       /* const genre = prompt(`Ваш улюблений жанр? під номером  &{i}`);
        personalMovieDB.genre[i - 1] = genre;*/

        personalMovieDB.genders[i - 1] = prompt(`Ваш улюблений жанр? під номером  &{i}`);
    }
}
writeYourGender();