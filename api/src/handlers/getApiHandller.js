const axios = require('axios');
require("dotenv").config();
const { END_POINT, API_KEY } = process.env;

const getApiHandller = async (search) => {

    const { data } = await axios.get(`${END_POINT}/search?q=${search}&api_key=${API_KEY}`)
    const info = data.map(el => {
            return {
                id: el.id,
                image: el.reference_image_id,
                name: el.name,
                temperament: el.temperament,
                weight: el.weight.metric,
                height: el.height.metric,
                life_span: el.life_span,
            }
    });
    const infoSin = info.filter(el => {
        if (el.image !== undefined) {
           return el
    } })

    return infoSin;

}


module.exports = getApiHandller;
