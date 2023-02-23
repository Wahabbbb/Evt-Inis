const numberOfFilms=prompt("How many movies u've watched?"); 
const personalMovieDB= {

count:numberOfFilms, 
movies : {}
}; 

for(let i=0 ; i<2 ; i++) {
    let a=prompt('Name one of the last movies?') ; 
    let b=prompt('Rate this movie:'); 
    if(a!=''&&a.length<=40&&b.length<=40)
    {personalMovieDB.movies[a]=b;
    }else 
    
    {i--;
        alert('Something wrong');    }
}
console.log(personalMovieDB);