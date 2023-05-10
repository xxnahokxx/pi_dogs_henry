const axios = require('axios');
require("dotenv").config();
const { END_POINT, API_KEY } = process.env;


const getDogs = async (req, res) => {
    const { name } = req.query;
    console.log(req.query);
    try {
        if (name) {
            const { data } = await axios.get(`${END_POINT}/search?q=${name}&api_key=${API_KEY}`)
            console.log("esto es data ====", data);
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

            console.log(info);
            res.status(200).json(info)

        } else {
            const { data } = await axios.get(`${END_POINT}`)
            const info = data.map(el => {
                return {
                    id: el.id,
                    image: el.image.url,
                    name: el.name,
                    temperament: el.temperament,
                    weight: el.weight.metric,
                    height: el.height.metric,
                    life_span: el.life_span,
                }
            });

            console.log(info);
            res.status(200).json(info)

        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getDogs;
