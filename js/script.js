'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
    return numberOfFilms;
}

// start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2;) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        if (!a == ' ' && !b == ' ' && a !== null && b !== null && a.length < 50) {
            personalMovieDB.movies[a] = b;
            i++;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms > 0 && numberOfFilms <= 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB(privat) {
    if(!privat) {
        console.log(personalMovieDB);
    }
}
// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();

console.log(personalMovieDB.genres);





// let i = 0, a, b;
// while(i != 2) {
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', '');
//     console.log('i = ', i);
//     if (!a == ' ' && !b == ' ' && a !== null && b !== null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//     }
// }

// debugger;
// do{
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', '');
//     console.log('i = ', i);
//     if (!a == ' ' && !b == ' ' && a !== null && b !== null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//     }
// } while (i != 2);
