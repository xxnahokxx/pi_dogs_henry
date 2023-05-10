const axios = require('axios');
require("dotenv").config();
const { END_POINT, API_KEY } = process.env;


const getDogs = async (req, res) => {
    try {
        const { data } = await axios.get(`${END_POINT}`)
        const info = data.map(el => {
            return {
                id: el.id,
                image: el.image.url,
                name: el.name,
                temperament: el.temperament,
                weight: el.weight.metric,
                height: el.height.metric,
            }
        });
        console.log(info);
        res.status(200).json(info)


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getDogs;
