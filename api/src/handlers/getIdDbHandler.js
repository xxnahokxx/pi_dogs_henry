const { Dog } = require("../db");

const getIdDbHandler = async (id) => {
    const data = await Dog.findAll({
        where: { id },
    })

    return data
}

module.exports = getIdDbHandler;
