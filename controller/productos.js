const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');

const router = require("express").Router();
let dao = require("../dataccess/Productos");

/* Obtener todo */
router.get("/", (req, res) => {
    res.status(200).json(dao.getAll(req.query));
});

//destacados
router.get("/destacados", (req, res) => {
    res.status(200).json(dao.getDestacados());
});


//Obtener por tipo
router.get("/tipo", (req, res) => {
    res.status(200).json(dao.getTipo(req.query.tipo));
});

//Obtener por marca
router.get("/marca", (req, res) => {
    res.status(200).json(dao.getMarca(req.query.marca));
});

/* Obtener uno especifico */
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const data = dao.getOne(id);

    if (data) {
        res.status(200).json(data);
    } else {
        res.sendStatus(404);
    }
});

/* Agregar un elemento */

router.post("/", (req, res) => {

    const body = { id: uuidv4(), ...req.body };
    dao.save(body);
    res.status(200).json(body);
});

/* Borrar un elemento */

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    if (dao.borrar(id)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

/* Modificar un elemento */
router.put("/:id", (req, res) => {
    const id = req.params.id;

    if (dao.update(id, req.body)) {
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;