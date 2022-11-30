'use strict';

let personalMovieDB ={
    count: 0,
    movies: {},
    actors: {},
    genders: [],
    privat: false ,
    start: function(){
       personalMovieDB.count  = +prompt('Скільки фільмів ви вже дивилися', '7');
        while(personalMovieDB.count === '' || personalMovieDB.count=== null || isNaN(personalMovieDB.count)){
            personalMovieDB.count  = +prompt('Скільки фільмів ви вже дивилися', '7');
        }
    },
    rememberMyFilms: () => {
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
        } ,
        detectPersonalLevel: () => {
    
            if(npersonalMovieDB.count <= 10){
                console.log('Ви переглянули мало фільмів');
            }else if(personalMovieDB.count > 10 && personalMovieDB.count <=30){
                console.log('Ви класичний глядач');
            }else if(personalMovieDB.count < 0){
                console.log('Трапилась помилка!')
            }
            else{
                console.log('Ви кіноман!');
            }
        },
        showMyDB: (hidden) => {
            if(!hidden){
               console.log(personalMovieDB);
            }
        },
        toggleVisibleMyDB: () =>{
            if(personalMovieDB.privat){
               personalMovieDB.privat === false;
            }else{
                personalMovieDB.privat === true;
            }
        },
        writeYourGender: () => {
            for( let i = 1; i < 3;i++){
                let genre = prompt(`Ваш улюблений жанр? під номером  &{i}`);

                if(genre === '' || genre === null){
                    console.log('false');
                    i--;
                }else{
                    personalMovieDB.genders[i - 1] = genre;
                }
               personalMovieDB.genre.forEach((items, i) => {
                  console.log(`Улюблений жанр ${i + 1} - це ${items}` );
               })
            }
        }
}




