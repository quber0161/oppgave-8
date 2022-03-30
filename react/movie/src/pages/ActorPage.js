import { useState } from "react";
import { useParams } from "react-router";
import Actor from "../Components/Actor";
import { actedActedInMovies } from "../util/Service/moviess";


const ActorPage = () =>{

    const{slug}=useParams()
    const[actor,setActor] =useState([]);

    const stringslug =  slug.replace(":", "")
    useState(async()=>{
        console.log(stringslug)
        const data= await actedActedInMovies(stringslug);
        console.log(data)
        setActor(data[0])
    })
    return(< div> 
                <Actor actor={actor.title}/>
                <h5>This actor stars in these movies: </h5>
                {actor?.movies?.map((m)=>  <li>{m.title} </li>)}
            </div>)
   }
   
   export default ActorPage;