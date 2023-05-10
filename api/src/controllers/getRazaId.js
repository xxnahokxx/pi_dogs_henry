const axios = require('axios');
require("dotenv").config();
const { END_POINT, API_KEY } = process.env;

const getRazaId = async (req, res) => {
    const { idRaza } = req.params;
    try {
        const { data } = await axios.get(`${END_POINT}`)
        const info = data.find(el => el.id === Number(idRaza));
        const { id,
            reference_image_id,
            name,
            temperament,
            weight: { metric: weight },
            height: { metric: height },
            life_span,
        } = info;
        console.log(height);
        res.status(200).json({
            id,
            reference_image_id,
            name,
            temperament,
            weight,
            height,
            life_span,
        });
    } catch (error) {

    }
};


module.exports = getRazaId;
