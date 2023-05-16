const { Dog, conn } = require("../db");
const { Op } = require('sequelize');


const getNameDogsHandler = async (name) => {
    const data = await Dog.findAll({
        where: conn.where(
            conn.fn('lower', conn.col('name')),
            { [Op.iLike]: `%${name.toLowerCase()}%` }
        )
    })

    return data;
}

module.exports = getNameDogsHandler;
