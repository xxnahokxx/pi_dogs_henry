const { Dog } = require("../db");

const getDogsHandler = async (name) => {
    const {data} = await Dog.findAll({
        where: { name },
    })

    return data.dataValues;
}

module.exports = getDogsHandler;
