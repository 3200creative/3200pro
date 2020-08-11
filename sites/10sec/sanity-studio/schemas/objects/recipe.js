export default {
    name: 'recipe',
    type: 'object',
    title: 'Recipe',
    fields: [
        {
            title: 'Title',
            name: 'title',
             type: 'string',
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            rows: 3,
        },
        {
            title: 'Ingredient',
            name: 'ingredients',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Instructions',
            name: 'instructions',
            type: 'array',
            of: [{type: 'text'}]
        },
        {
            title: 'Notes',
            name: 'notes',
            type: 'blockContent',
        },
        {
            title: 'Prep Time',
            name: 'prepTime',
            type: 'string',
        },
        {
            title: 'Cook Time',
            name: 'cookTime',
            type: 'string',
        },
        {
            title: 'Total Time',
            name: 'totalTime',
            type: 'string',
        },
        {
            title: 'Yield',
            name: 'yield',
            type: 'string',
        },
        {
            title: 'Category',
            name: 'category',
            type: 'string',
        },
        {
            title: 'Method',
            name: 'method',
            type: 'string',
        },
        {
            title: 'Cuisine',
            name: 'cuisine',
            type: 'string',
        },
        {
            title: 'Diet',
            name: 'diet',
            type: 'array',
            of: [{type: 'string'}],
            options: {
                list: [ 
                    {title: 'N/A', value: 'N/A'},
                    {title: 'Diabetic', value: 'Diabetic'},
                    {title: 'Gluten Free', value: 'Gluten Free'},
                    {title: 'Halal', value: 'Halal'},
                    {title: 'Hindu', value: 'Hindu'},
                    {title: 'Kosher', value: 'Kosher'},
                    {title: 'Low Calorie', value: 'Low Calorie'},
                    {title: 'Low Fat', value: 'Low Fat'},
                    {title: 'Low Lactose', value: 'Low Lactose'},
                    {title: 'Low Salt', value: 'Low Salt'},
                    {title: 'Vegan', value: 'Vegan'},
                    {title: 'Vegetarian', value: 'Vegetarian'}
                ],
                layout: 'checkbox'
            }
        },
        {
            title: 'Keyword',
            name: 'keyword',
            type: 'tags'
        },
        {
            title: 'Video URL',
            name: 'videoUrl',
            type: 'string'
        },
        {
            title: 'Nutrifox ID',
            name: 'nutrifoxId',
            type: 'string'
        },
        {
            title: 'Serving Size',
            name: 'servingSize',
            type: 'string'
        },
        {
            title: 'Calories',
            name: 'calories',
            type: 'string'
        },
        {
            title: 'Sugar',
            name: 'sugar',
            type: 'string'
        },
        {
            title: 'Sodium',
            name: 'sodium',
            type: 'string'
        },
        {
            title: 'Fat',
            name: 'fat',
            type: 'string'
        },
        {
            title: 'Unsaturated Fat',
            name: 'unsaturatedFat',
            type: 'string'
        },
        {
            title: 'Trans Fat',
            name: 'transFat',
            type: 'string'
        },
        {
            title: 'Carbohydrates',
            name: 'carbohydrates',
            type: 'string'
        },
        {
            title: 'Fiber',
            name: 'fiber',
            type: 'string'
        },
        {
            title: 'Protein',
            name: 'protein',
            type: 'string'
        },
        {
            title: 'Cholesterol',
            name: 'cholesterol',
            type: 'string'
        },                                                                      
    ]
}