let Comments = [{
    "id": "1",
    "comment": "Ideal para empezar en el mundo del gaming",
    "rating": 6,
    "idProdu": "1"
},
{
    "id": "2",
    "comment": "Una placa de gama media alta ideal para el gamer promedio",
    "rating": 8.2,
    "idProdu": "2"
},
{
    "id": "3",
    "comment": "Lo mejor en placas de video en el mercado actual",
    "rating": 10,
    "idProdu": "3"
},
{
    "id": "4",
    "comment": "Procesador de gama alta en Intel con video incorporado",
    "rating": 10,
    "idProdu": "4"
},
{
    "id": "5",
    "comment": "El mejor procesador de AMD con video incorporado de alta calidad",
    "rating": 8,
    "idProdu": "5"
},
{
    "id": "6",
    "comment": "La gama mas alta de AMD sin video pero de los mejores micros del mercado",
    "rating": 7,
    "idProdu": "6"
},
{
    "id": "7",
    "comment": "excelente el mensaje que transmite",
    "rating": 7.5,
    "idProdu": "4"
},
{
    "id": "8",
    "comment": "Memoria estandar para un equipo para gaming recien iniciado",
    "rating": 8,
    "idProdu": "8"
},
{
    "id": "9",
    "comment": "Memoria de gran capacidad, con discipador incluido para menor temperatura",
    "rating": 9,
    "idProdu": "9"
},
{
    "id": "10",
    "comment": "Memoria potente con 3200Mhz, discipador y RGB incluido",
    "rating": 10,
    "idProdu": "10"
},

];

const getAll = (query) => {
let resultado = Comments;

if (query.idProdu) {
    resultado = resultado.filter(e => e.idProdu === query.idProdu)
}

if (query.rating) {
    resultado = resultado.filter(e => e.rating > query.rating)
}

return resultado
};


const save = (body) => { Comments.push(body); }

const borrar = (id) => {
const index = Comments.findIndex((registro) => registro.id == id);
if (index > 0) {
    Comments.splice(index, 1);
    return true
}
return false
}

const update = (id, req) => {
const index = Comments.findIndex((registro) => registro.id == id);
if (index >= 0) {
    Comments[index] = req;
    return true
}
return false
}

module.exports = { getAll, save, borrar, update };