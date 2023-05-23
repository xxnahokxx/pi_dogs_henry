const { Temperament } = require("../db");

const getTemperamentsHandler = async () => {
    const dato = await Temperament.findAll();

    const value = dato.map(el => {
        return {
            id: el.id,
            name: el.name,
        }
    })

    return value;
}

module.exports = getTemperamentsHandler;
