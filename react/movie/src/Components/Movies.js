import Movie from "./Movie";
import { useState, useEffect } from "react";
import { getMovies } from "../util/Service/moviess";



const Movies = () =>{

    const[movies, setMovies] = useState([])

    useEffect(async() =>{
   
        // const actors = await getActors()
            const movies = await getMovies()
            console.log(movies)
            //console.log(actors)
    
            setMovies(movies)
            
    }, [])
 


    const mapMovies = movies?.map((m) => (
        <Movie title={m.title} actor={m.actor} key={m.title} />
      ));
    return(
        <div >
            {mapMovies}
        </div>
    )
}

export default Movies;