const axios = require('axios');
require("dotenv").config();
const { END_POINT, API_KEY } = process.env;
const { getIdDbHandler } = require("../handlers/index")

const getRazaId = async (req, res) => {
    const { idRaza } = req.params;
    try {
        const { data } = await axios.get(`${END_POINT}`)
        const info = data.find(el => el.id === Number(idRaza));
        const info2 = await getIdDbHandler(idRaza);

        if (info2.length === 0 && info === undefined) return res.status(404).send({ message: "Perro no encontrado" })

        if (info === undefined) {
            return res.status(200).json(info2[0]);
        }

        const { id,
            reference_image_id,
            name,
            temperament,
            weight: { metric: weight },
            height: { metric: height },
            life_span,
        } = info;

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
        res.status(500).json({ error: error.message });
    }
};


module.exports = getRazaId;
