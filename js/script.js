"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


// for(let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');
//     personalMovieDB.movies.a = b;
// }


const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;


const a2 = prompt('Один из последних просмотренных фильмов?', '');
const b2 = prompt('На сколько оцените его?', '');
personalMovieDB.movies[a2] = b2;


console.log(personalMovieDB);