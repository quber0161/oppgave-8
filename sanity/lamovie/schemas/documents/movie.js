const movie = {
    title: 'movie',
    name: 'movie',
    type: 'document',
    fields: [
        {   
            title: 'Title',
            name: 'title',
            type: 'string',
            description: 'Tittelen til filmen'
        },
            {
                title: 'actor',
                name: 'actor',
                type: 'reference',
                to: [{ type: 'actor' }],
    
            }
    ]
}

export default movie;
