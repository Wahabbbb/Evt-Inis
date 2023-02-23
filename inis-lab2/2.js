let personalMovieDB = {
    movies: [
        {lastWached: "Interstellar", filmScore: 10},
        {lastWached: "Fury", filmScore: 9},
        {lastWached: "All Quiet on the western front", filmScore: 8}
        
    ],

    private: false,
};

function movieTable(){

    if (personalMovieDB.private == true) return;
    let table = document.querySelector('.table');
    
    
    table.innerHTML += "<tr><td>Movies</td><td>Rate</td></tr>"
    let count = 0
    for(const movie in personalMovieDB.movies){
        let col = document.createElement('tr');
        col.innerHTML += "<td>" + personalMovieDB.movies[count].lastWached + "</td>";
        col.innerHTML += "<td>" + personalMovieDB.movies[count].filmScore + "</td>";
        table.append(col);
        count++;
    }

}
