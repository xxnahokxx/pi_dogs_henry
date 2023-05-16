const axios = require('axios');
require("dotenv").config();
const { END_POINT, API_KEY } = process.env;
const { getAllDbHandler } = require("../handlers/index")

const getDogs = async (req, res) => {
    try {

        const { data } = await axios.get(`${END_POINT}`)

        const info1 = data.map(el => {
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

        const info2 = await getAllDbHandler();

        const info = [];

        info1.map(el => {
            info.push(el);
        })

        info2.map(el => {
            info.push(el);
        })

        res.status(200).json(info);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }


}

module.exports = getDogs;
