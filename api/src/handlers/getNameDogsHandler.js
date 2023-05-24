const { Dog, conn, Temperament } = require("../db");
const { Op } = require('sequelize');


const getNameDogsHandler = async (name) => {
    const data = await Dog.findAll({
        where: conn.where(
            conn.fn('lower', conn.col('name')),
            { [Op.iLike]: `%${name.toLowerCase()}%` }
        ),
        include: {
            model: Temperament,
            attributes: ["names"],
            through: {
                attributes: [],
            },
        },

    })

    const value = data.map(el => {
        const temperaments = el.Temperaments.map((t) => t.names);
        return {
            id: el.id,
            name: el.name,
            image: el.image,
            height: el.height,
            weight: el.weight,
            life_span: el.life_span,
            temperament: temperaments.join(", "),
        }
    })

    return value;
}

module.exports = getNameDogsHandler;
