const yelpApi = 'rjCJo-3WWjYfzrZqZra6dyUrakgHwk_v3HUzOT6hMU8v5bHp_gaecThX21MRg4O0fCsh0-DyFeOiZwO0IWwA7wJYaP-GwcODQGmS-ZL3oZt2yPEh3okfKUZxhalMYXYx';
const yelpClientId = '3k6V-naUxWQh7uFm-3vslg';
const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;

export const getRestaurants = async () => {
    const options = {
        headers: {
            Authorization: `Bearer ${yelpApi}`
        }
    }
    fetch(url, options).then(res => res.json()).then(res => {
        console.log(res)
        return res;
    });    
}