export const POPULATION_FILTER_OPTIONS = [
    {
        value: 1000000,
        label: '< 1 M'
    },
    {
        value: 5000000,
        label: '< 5 M'
    },
    {
        value: 10000000,
        label: '< 10 M'
    }
]


export const POPULATION_TABLE_ATTRIBUTES = [
    {
        name: "name",
        label: "Country Name"
    },
    {
        name: "abbreviation",
        label: "Code"
    },
    {
        name: "capital",
        label: "Capital"
    },
    {
        name: "phone",
        label: "Ph Code"
    },
    {
        name: "population",
        label: "Population"
    },
    {
        name: "media",
        label: "Flag",
        component: {
            name: "Image",
            attribute: "media.flag"
        }
    },
    {
        name: "name",
        label: "Emblem",
        component: {
            name: "Image",
            attribute: "media.emblem"
        }
    },
]

export const COUNTRY_URL = 'https://api.sampleapis.com/countries/countries'