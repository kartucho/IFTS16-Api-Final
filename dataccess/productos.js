let Productos = [{
        "id": "1",
        "tipo": "Placa de Video",
        "marca": "ASUS",
        "modelo": "GTX 1660 Super",
        "precio": 130000,
        "segmento": "Diseño"
    },
    {
        "id": "2",
        "tipo": "Placa de Video",
        "marca": "GIGABYTE",
        "modelo": "RTX 3060 Super",
        "precio": 250000,
        "segmento": "Gaming"
    },
    {
        "id": "3",
        "tipo": "Placa de Video",
        "marca": "GIGABYTE",
        "modelo": "RTX 3090 TI",
        "precio": 590000,
        "segmento": "Gaming"
    },
    {
        "id": "4",
        "tipo": "Microprocesador",
        "marca": "INTEL",
        "modelo": "I5-12400",
        "precio": 45000,
        "segmento": "Diseño"
    },
    {
        "id": "5",
        "tipo": "Microprocesador",
        "marca": "INTEL",
        "modelo": "I7-12700",
        "precio": 79000,
        "segmento": ["Gaming", "Diseño"]
    },
    {
        "id": "6",
        "tipo": "Microprocesador",
        "marca": "AMD",
        "modelo": "RYZEN 7 5700G",
        "precio": 57000,
        "segmento": "Diseño"
    },
    {
        "id": "7",
        "tipo": "Microprocesador",
        "marca": "AMD",
        "modelo": "RYZEN 9 5900X",
        "precio": 97000,
        "segmento": "Gaming"
    },
    {
        "id": "8",
        "tipo": "Memoria RAM",
        "marca": "Kingston",
        "modelo": "DDR4 8Gb 2666Mhz Value",
        "precio": 9800,
        "segmento": "Diseño"
    },
    {
        "id": "9",
        "tipo": "Memoria RAM",
        "marca": "Kingston",
        "modelo": "DDR4 16Gb 2666Mhz Fury",
        "precio": 17500,
        "segmento": "Gaming"
    },
    {
        "id": "10",
        "tipo": "Memoria RAM",
        "marca": "Kingston",
        "modelo": "DDR4 32Gb 3200Mhz Fury Beast RGB",
        "precio": 32900,
        "segmento": "Gaming"
    }
];

const getAll = (query) => {
    let resultado = Productos;

    if (query.tipo) {
        resultado = resultado.filter(e => e.tipo === query.tipo)
    }

    if (query.segmento) {
        resultado = resultado.filter(e => e.segmento.includes(query.segmento))
    }

    if (query.search) {
        resultado = resultado.filter(e => e.tipo.includes(resultado.search) || e.segmento.includes(resultado.search) || e.marca.includes(resultado.search))
    }

    return resultado
};

const getMarca = (marca) => { return Productos.filter(productos => productos.marca == marca) };

const getTipo = (tipo) => { return Productos.filter(productos => productos.tipo == tipo) };

const getOne = (id) => { return Productos.find((registro) => registro.id == id); }

const save = (body) => { Productos.push(body); }

const borrar = (id) => {
    const index = Productos.findIndex((registro) => registro.id == id);
    if (index > 0) {
        Productos.splice(index, 1);
        return true
    }
    return false
}

const update = (id, req) => {
    const index = Productos.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Productos[index] = req;
        return true
    }
    return false
}

module.exports = { getAll, getOne, save, borrar, update, getMarca, getTipo };