const { Router } = require('express');
const { dogPost, getDogs, getRazaId, getTemperament, queryDogs } = require("../controllers/index");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.get("/dogs", getDogs)
// router.get("/dogs", queryDogs)// solicitud por query por eso es igual a la primera
router.get("/dogs/:idRaza", getRazaId)
router.post("/dogs", dogPost)
router.get("/temperaments", getTemperament)
// router.post("/temperaments", getTemperament)  // probar despues

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
