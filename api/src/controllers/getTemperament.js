const axios = require('axios');
const postTemperamentsHandlers = require("../handlers/postTemperamentsHandler");
require("dotenv").config();
const { END_POINT, API_KEY } = process.env;

const getTemperament = async (req, res) => {
    try {
        const { data } = await axios.get(END_POINT)
        const info = data.map(el => {
            return {
                temperament: el.temperament,
            }
        })
        const temp = [];

        info.filter(el => el.temperament !== undefined)
            .map(el => {
                const tempToString = el.temperament.toString();
                let corte = tempToString.split(", ");
                return corte.map(el => {
                    if (!temp.includes(el)) {
                        return temp.push(el);
                    }
                })
        })

        await postTemperamentsHandlers(temp);

        res.status(200).json(temp);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getTemperament;
