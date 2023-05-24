const { Temperament } = require("../db");

const getTemperamentsHandler = async () => {
    const dato = await Temperament.findAll();

    const value = dato.map(el => {
        return {
            id: el.id,
            names: el.names,
        }
    })

    return value;
}

module.exports = getTemperamentsHandler;
