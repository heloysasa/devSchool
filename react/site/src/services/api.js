import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {

async listar() {
    let l = await api.get('/matricula');
    return l.data;
}


async inserir(nome,chamada,curso,turma) {
    let I = await api.post('/matricula', {nome,chamada,curso,turma});
    return I.data;
}

async alterar(id, nome,chamada,curso,turma) {
    let a = await api.put('/matricula/' + id, {nome,chamada,curso,turma});
    return a.data;
}

async deletar(id) {
    let d = await api.delete('/matricula/' + id);
    return d.data;
}
}