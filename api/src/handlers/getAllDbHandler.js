const { Dog } = require("../db");

const getAllDbHandler = async () => {
    const data = await Dog.findAll();
    return data;
}

module.exports = getAllDbHandler;
