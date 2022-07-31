const { v4: uuidv4 } = require("uuid");
const middleware = require('../utils/middleware');

const router = require("express").Router();
let dao = require("../dataccess/users");

/* Obtener todo los comentarios */
router.get("/", (req, res) => {
    res.status(200).json(dao.getAll(req.query));
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