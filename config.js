let config = {
    style: 'mapbox://styles/epibayes/ckbjenhub0uxi1ip764ygk7dj',
    accessToken: 'pk.eyJ1IjoiZXBpYmF5ZXMiLCJhIjoiY2tiaml0b3JpMHBuNzJ1bXk3MzdsbWs1aCJ9.YlxrUIBkuWk-VuYDDeMjBQ',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'Epidemiology Explained by Nina',
    subtitle: 'A great explanation of something complicated',
    byline: 'Draft by Alex',
    footer: 'Visit our <a href="https://covidmapping.org">main site</a>',
    chapters: [
        {
            id: 'one',
            title: 'Section 1',
            image: '',
            description: 'In our environment, let’s say we have seven hexagonal neighborhoods. In these neighborhoods there are households with four people in each household. We have 25 total households – or 100 total people in our environment.',
            location: {
                center: [-83.44, 42.329],
                zoom: 10.3,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'hexagons_5km_seven-dk8c7v',
                    opacity: 0.3,
                },
                {
                    layer: 'households',
                    opacity: 1,
                },
                {
                    layer: 'infected',
                    opacity: 0,
                },
            ],
            onChapterExit: [
            ],
        },
        {
            id: 'two',
            title: 'Section 2',
            image: '',
            description: 'Here, one household has a coronavirus infection. For the purposes of this explanation, we are going to assume that when a household gets COVID, all members of the household get COVID. So here, we have 4 COVID cases.',
            location: {
                center: [-83.40, 42.329],
                zoom: 11.3,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'households',
                    opacity: 0,
                },
                {
                    layer: 'infected',
                    opacity: 1,
                },
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'three',
            title: 'Section 3',
            image: '',
            description: 'In many models, and under the assumptions of social distancing, risk is typically assessed within a geographic unit. For example, the attack rate in the middle hexagon would be assessed as the number of cases / the total number of inhabitants (4 / 24) = 16.7%. Additionally, we might think that these other five households in the center hexagon have the highest risk, because they have a neighbor with COVID.',
            location: {
                center: [-83.40, 42.329],
                zoom: 11.8,
            },
            onChapterEnter: [
            ],
            onChapterExit: [                
            ]
        },
        {
            id: 'four',
            title: 'Section 4',
            image: '',
            description: "However, let's say the next reported cases in were in a household not in the 'at-risk' center hexagon. This might seem counter-intuitive - because based on location of home residence alone, the five homes in the center hexagon seem to be at the highest risk. How might this house in the neighboring hexagon have gotten infected?, it's really fun",
            location: {
                center: [-83.40, 42.329],
                zoom: 11.8,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'grocery_stores',
                    opacity: 0,
                },
                {
                    layer: 'connections',
                    opacity: 0,
                },
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'five',
            title: 'Section 5',
            image: '',
            description: 'People are not only confined to their homes - and even during stay-at-home orders, they leave to do essential tasks - such as getting groceries. Here, we have included the locations of the two grocery stores in this environment. There is a grocery store in the center hexagon which is also the nearest grocery store to the second infected house. By connecting households to their nearest grocery store, we can understand an additional way that people mix with individuals outside of their homes - and outside of their immediate neighborhoods.',
            location: {
                center: [-83.40, 42.329],
                zoom: 11.8,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'connections',
                    opacity: 1,
                },                {
                    layer: 'grocery_stores',
                    opacity: 1,
                },
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'six',
            title: 'Section 6',
            image: '',
            description: 'We can think of the houses falling into two groups:<ul><li>Closest to grocery store A (blue)</li><li>Closest to grocery store B (red)</li></ul> This allows us to construct interaction groups of individuals who are not connected by their neighborhood (hexagon) of residence, but connected by where they shop to get groceries. Now we can see that coding out which homes are closest to each grocery store, we get very different senses of who is "at-risk" from this initial infection in the center hexagon. Here we have 14 additional households that are "at-risk" based on shopping at the same grocery stores as these two houses with COVID.',
            location: {
                center: [-83.40, 42.329],
                zoom: 10.9,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'seven',
            title: 'Section 7',
            image: '',
            description: 'However, grocery stores are not the only essential businesses where individuals from different households might interact. Even during stay-at-home orders, hardware stores and pharmacies might also be potential places for infected individuals from different neighborhoods to expose each other, complicating the network of interaction',            
            location: {
                center: [-83.44, 42.329],
                zoom: 10.9,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        }
    ]
};