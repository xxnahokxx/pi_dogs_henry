const { dogPostHandlers, countDbHandler } = require("../handlers/index")

const dogPost = async (req, res) => {
    const { name, height, weight, life_span, temperament, image } = req.body;

    console.log(name);

    try {

        if (!name || !height || !weight || !life_span || !temperament) return res.status(401).json({ message: "faltan datos" });

        const conteo = await countDbHandler();

        console.log(conteo);

        const data = await dogPostHandlers(name, height, weight, life_span, temperament, conteo, image);

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = dogPost;
