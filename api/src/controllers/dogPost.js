const countDbHandler = require("../handlers/countDbHandler");
const { dogPostHandlers } = require("../handlers/index")

const dogPost = async (req, res) => {
    const { name, heigth, weight, life_span, temperament, image } = req.body;
    try {

        if (!name || !heigth || !weight || !life_span || !temperament) res.status(401).json({ message: "faltan datos" });

        const conteo = await countDbHandler();

        console.log(conteo);

        const data = await dogPostHandlers(name, heigth, weight, life_span, temperament, conteo, image);

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = dogPost;
