'use strict';
let numberOfFilms = +prompt('Скільки фільмів ви вже дивилися', '7');

let personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors: '',
    genders: [],
    privat: false 
}

// for

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


/*while
let j = 0;

    while(j < numberOfFilms){
        j++;
        const a = prompt('Один з останніх переглянутих фільмів?'),
        b = prompt('На скільки оціните його?');
    }
    if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
        personalMovieDB.movies[a] = b;
    }else {
        console.log('Error');
        i--;
    }
*/
/* do while

    do{
        const a = prompt('Один з останніх переглянутих фільмів?'),
        b = prompt('На скільки оціните його?'); 
    }while(j < numberOfFilms);

    if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
        personalMovieDB.movies[a] = b;
    }else {
        console.log('Error');
        i--;
    }
*/


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
    
console.log(personalMovieDB);