const jwt = require('jsonwebtoken');
const router = require('express').Router();
require('dotenv').config()

router.post('/', (req, res) => {
    const { body } = req
    console.log(body)
    if (body.username == 'master' && body.password == 'ifts16') {
        //usuario correcto
        const tokenData = {
            username: body.username,
            id: 1,
            profile: 'Admin Master'
        }

        const token = jwt.sign(tokenData, process.env.JWTSECRET, { expiresIn: '1h' })
        res.status(200).send({ token, name: 'Master of the universe' })
    } else {
        //usuario incorrecto
        return res.status(401).json({ error: 'credenciales incorrectas' })
    }
})

module.exports = router