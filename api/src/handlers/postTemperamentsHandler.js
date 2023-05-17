const { Temperament } = require("../db");

const postTemperamentsHandlers = async (temp) => {
        await temp.map(el => {
            Temperament.findOrCreate({
                where: {name: el},
            })
        });
}

module.exports = postTemperamentsHandlers;
