import React, {useState, useEffect} from "react";
import MovieCard from "./movieCard";
function Homepage (){
    
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '7cf423e5a87e0e3b3165c0537b2d334e';
    const url = `${API_URL}movie/popular?api_key=${API_KEY}`;
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    },[url])
    console.log(movies)
    return(
        <div className="movies">
        {movies.map((movie) => (
            <MovieCard {...movie}/>
        ))}
        </div>
        
    )
}

export default Homepage;