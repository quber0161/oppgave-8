import client from '../client'

const eventFields = `
  title,
  'slug': slug.current,

`
export const getActors = async () => {
    const data = await client.fetch( `*[_type == "actor"]{${eventFields}}`);
    return data;
  };