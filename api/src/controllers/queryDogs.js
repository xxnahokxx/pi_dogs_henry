const axios = require('axios');
require("dotenv").config();
const { END_POINT, API_KEY } = process.env

const queryDogs = async (req, res) => {
    const { search } = req.query;
    try {
        const { data } = await axios.get(`${END_POINT}/search?q=${search}?api_key=${API_KEY}`)
        const info = data.map(el => {
            return {
                id: el.id,
                image: el.image.url,
                name: el.name,
                temperament: el.temperament,
                weight: el.weight.metric,
                height: el.height.metric,
            }
        })
        console.log(info);
        res.status(200).json(info)
    } catch (error) {

    }
};


module.exports = queryDogs;
