const actor = {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
        {   
            title: 'title',
            name: 'title',
            type: 'string',
            description: 'her finner du skuspilleren'
        },
            {
             
                title: 'Slug',
                name: 'slug',
                type: 'slug',
                description: 'Dette er den unike url-en',
                validation: (Rule) => Rule.required(),
                options: {
                  source: 'title',
                  maxLength: 96,

            }
        }

    ]
}

export default actor;
