const {Dog} = require("../db")

const countDbHandler = async () => {
    const count = await Dog.count()
    return count;
}

module.exports = countDbHandler;
