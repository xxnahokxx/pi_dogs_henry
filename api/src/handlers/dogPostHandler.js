const { Dog } = require("../db");

const dogPostHandlers = async (name, heigth, weight, life_span, temperament) => {
    const newDog = await Dog.create({
        name,
        heigth,
        weight,
        life_span,
    });

    newDog.addTemperaments(temperament);

    return newDog;
}

module.exports = dogPostHandlers;
