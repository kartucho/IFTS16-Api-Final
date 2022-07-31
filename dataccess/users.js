let Users = [{
        "id": "1",
        "name": "Alan",
        "lastname": "Gimelstein",
        "user": "Alanardo",
        "email": "alan@gmail.com"
    },
    {
        "id": "2",
        "name": "Gonzalo",
        "lastname": "Garcia",
        "user": "barba",
        "email": "gonzalo@gmail.com"
    },
    {
        "id": "3",
        "name": "Matias",
        "lastname": "Giusti",
        "user": "Justo",
        "email": "mati@gmail.com"
    },
    {
        "id": "4",
        "name": "Agustin",
        "lastname": "Basualdo",
        "user": "agusB",
        "email": "agustin@gmail.com"
    },
];

const getAll = (query) => {
    let resultado = Users;

    if (query.user) {
        resultado = resultado.filter(e => e.user === query.user)
    }

    if (query.email) {
        resultado = resultado.filter(e => e.email === query.email)
    }

    if (query.search) {
        resultado = resultado.filter(e => e.user.includes(resultado.search) || e.name.includes(resultado.search) || e.lastname.includes(resultado.search) || e.email.includes(resultado.search))
    }

    return resultado
};


const save = (body) => { Users.push(body); }

const borrar = (id) => {
    const index = Users.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Users.splice(index, 1);
        return true
    }
    return false
}

const update = (id, req) => {
    const index = Users.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Users[index] = req;
        return true
    }
    return false
}

module.exports = { getAll, save, borrar, update };