import client from '../client'

const eventFields = `
title,
'actor': actor->title,
`
export const getMovies = async () => {
    const data = await client.fetch( `*[_type == "movie"]{${eventFields}}`);
    return data;
  };


  export const actedActedInMovies = async (slug) =>{
    const data = await client.fetch(
      ` *[_type=="actor" && slug.current == $slug]{
          title,
          "movies": *[_type=='movie' && references(^._id)]{ title }
        } `, { slug}
    )
    return data
  }
  