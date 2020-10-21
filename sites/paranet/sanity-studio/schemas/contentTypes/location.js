export default {
    name: 'location',
    type: 'document',
    title: 'Paranet Location',
    fields: [
        {
            name: 'locationTitle',
            title: 'Location Titles',
            type: 'string'
        },
        {
            title: 'Geo Location',
            name: 'location',
            type: 'geopoint'
        },
        {
            title: 'Address Line 1',
            name: 'line1',
            type: 'string'
        },
        {
            title: 'Address Line 2',
            name: 'line2',
            type: 'string'
        },
        {
            title: 'City',
            name: 'city',
            type: 'string'
        },
        {
            title: 'Full State Spelling',
            name: 'stateName',
            type: 'string'
        },
        {
            title: 'State Abbreviation',
            name: 'stateAbbrv',
            type: 'string'
        },
        {
            title: 'Phone Number',
            name: 'phone',
            type: 'string'
        },
    ]
}