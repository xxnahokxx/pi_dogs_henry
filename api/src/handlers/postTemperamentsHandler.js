const { Temperament } = require("../db");

const postTemperamentsHandlers = async (temp) => {
        await temp.map(el => {
            Temperament.findOrCreate({
                where: {names: el},
            })
        });
}

module.exports = postTemperamentsHandlers;
