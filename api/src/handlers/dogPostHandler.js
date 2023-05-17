const { Dog } = require("../db");

const dogPostHandlers = async (name, height, weight, life_span, temperament, conteo, image) => {
    const initial = 300
    let id = initial + conteo;
    const newDog = await Dog.create({
        id: id,
        name,
        height,
        weight,
        life_span,
        image,
    });

    newDog.addTemperaments(temperament);

    return newDog;
}

module.exports = dogPostHandlers;
