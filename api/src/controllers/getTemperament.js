const axios = require('axios');
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
        const tratamient = info.map(el => {
            if (el.temperament !== undefined) {
                const corte = el.temperament.toString();
                let prueba = corte.split(", ");
                return prueba.map(el => {
                    if (!temp.includes(el)) {
                        return temp.push(el);
                    }
                })
            }
        })

        // console.log("estas en tratamient", temp);

        res.status(200).json(temp);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getTemperament;
