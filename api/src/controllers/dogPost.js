const { dogPostHandlers } = require("../handlers/index")

const dogPost = async (req, res) => {
    const { name, heigth, weight, life_span, temperament } = req.body;
    try {
        if (!name || !heigth || !weight || !life_span || !temperament) res.status(401).json({ message: "faltan datos" });

        const data = await dogPostHandlers(name, heigth, weight, life_span, temperament);

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = dogPost;
