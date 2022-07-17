//housing everything to do with the API here so it's easier to access
const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    get = async () =>{
        try{
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data; 
        }
        catch(e) {
            console.log('fetchHouses had an issue!!', e);
        }
    }

    //add or delete rooms to our house
    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json()
        }
        catch(e) {
            console.log('Updating houses had an issue!!', e);
        }
    }
}

//lets us use the same instance of this method each time it's called
export const housesApi = new HousesApi();