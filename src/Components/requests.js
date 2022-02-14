
const requests = {
    fetchShoes: `https://the-sneaker-database.p.rapidapi.com/sneakers/52b284fd-d828-4f87-a721-e5aff3c25871`,
    fetchBrands: `https://v1-sneakers.p.rapidapi.com/v1/brands`
}

const brands_logo_req = [
    {
        logo_image: `https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png`
    },
    {
        logo_image: `https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png`,
    },
    {
        logo_image: `https://1000logos.net/wp-content/uploads/2021/04/Louis-Vuitton-logo.png`,
    },
    {
        logo_image: `https://logos-world.net/wp-content/uploads/2020/09/New-Balance-Logo-1972-2006.png`,
    },
    {
        logo_image: `https://pnggrid.com/wp-content/uploads/2021/06/Puma-black-logo.png`,

    }
]

const header = {
    'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
    'x-rapidapi-key': 'df60355ef1msh131ba1106c5b1e2p10e672jsnd5427ae3ef48'
}

export {
    requests,
    header,
    brands_logo_req
}
