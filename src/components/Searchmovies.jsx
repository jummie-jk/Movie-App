import React, {useState} from "react";
import Card from "./Card"

function Searchmovies(){
    const[query, setQuery] = useState(" ")

    const[movies, setMovies] = useState([])

   const searchMovies = async (e) => {
    e.preventDefault();
    console.log("Submitting")

    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '7cf423e5a87e0e3b3165c0537b2d334e';
    const url = `${API_URL}search/movie?api_key=${API_KEY}&query=${query}`;

    try{
         const res = await fetch(url);
         const data = await res.json();
         setMovies(data.results)
         console.log(data.results)
    } catch(err){
            console.error(err)
    }

   }
    return <>
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input className="input" type="text" name="query" placeholder="i.e Wakanda"
            value={query} onChange={(e=> setQuery(e.target.value))}></input>
            <button type="submit" className="button">Search</button>
        </form>

        <div className="card-list">
           {movies.filter(movie=>movie.poster_path).map(movie => (
            <Card movie = {movie} key="movie.id"/>
           ))}
           
        </div>
        
    </>
}

export default Searchmovies;