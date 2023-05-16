// const axios = require('axios');
// require("dotenv").config();
// const { END_POINT, API_KEY } = process.env;


const { getNameDogsHandler, getApiHandller } = require("../handlers/index");


const getNameDogs = async (req, res) => {
    const { search } = req.query;
    console.log(search);
    try {
        if (!search) res.status(401).json({ message: "Faltan datos" });

        const data1 = await getApiHandller(search);
        console.log(data1);
        const data2 = await getNameDogsHandler(search);
        console.log(data2);

        const response = [];

        data1.map(el => {
            response.push(el);
        });

        data2.map(el => {
            response.push(el);
        })

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getNameDogs;
