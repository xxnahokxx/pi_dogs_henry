const { Temperament } = require("../db");

const postTemperamentsHandlers = async (temp) => {
        await temp.map(el => {
            console.log(el);
            Temperament.create({ nombre: el })
        });
}

module.exports = postTemperamentsHandlers;
