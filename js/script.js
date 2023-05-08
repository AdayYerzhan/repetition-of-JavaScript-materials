'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while (numberOfFilms == '' || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
//     return numberOfFilms;
// }

// start();


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        return personalMovieDB.count;
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2;) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (!a == ' ' && !b == ' ' && a !== null && b !== null &&
                a.length < 50) {
                personalMovieDB.movies[a] = b;
                i++;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if(a != '' && a !== null) {
                personalMovieDB.genres[i - 1] = a;
            } else {
                i--;
            }
        }
    },
    toggleVisibleMyDB: function() {
        console.log('privat-1 ', personalMovieDB.privat);
        personalMovieDB.privat = !personalMovieDB.privat;
        console.log('privat-2 ', personalMovieDB.privat);
        return personalMovieDB.privat;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.toggleVisibleMyDB());
personalMovieDB.writeYourGenres();

personalMovieDB.genres.forEach( function(item, i, arr) {
    console.log(`Любимый жанр №${i+1} - это ${item}`);
});


// function rememberMyFilms() {
//     for (let i = 0; i < 2;) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
//         if (!a == ' ' && !b == ' ' && a !== null && b !== null && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             i++;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (numberOfFilms > 0 && numberOfFilms <= 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (numberOfFilms > 10 && numberOfFilms <= 30) {
//         console.log('Вы классический зритель');
//     } else if (numberOfFilms > 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB(privat) {
//     if (!privat) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
//     }
// }

// writeYourGenres();

// console.log(personalMovieDB.genres);












// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// const obj = {...options};
// // for (let key in options) {
// //     obj[key] = options[key];
// // }

// console.log('123', obj);

// let count = 0;

// for (let key in options) {
//     if(typeof(options[key]) == 'object') {
//         for(let i in options[key]) {
//             console.log(`${i}: ${options[key][i]}`);
//             count++;
//         }
//     } else {
//         console.log(`${key}: ${options[key]}`);
//         count++;
//     }
// }
// console.log(count);
// console.log(Object.keys(options).length);
// const arr = Object.keys(options);
// console.log(arr.length);