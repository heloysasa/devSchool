import db from './db.js';
import express from 'express';
import cors from 'cors'


const si = express();
si.use(cors());
si.use(express.json());

si.get('/matricula', async (req,resp) => {
   try{
    let alunos = await db.tb_matricula.findAll({order: [['id_matricula', 'desc']]});
   resp.send(alunos);
} catch (e){
    resp.send({erro: 'não foi possível consultar'})
}
})




si.post('/matricula', async (req,resp) => {
    try{
        let alu = req.body;

        let a = await db.tb_matricula.findOne({where:{nr_chamada: alu.chamada, nm_turma: alu.turma  }})
        if (a != null)
           return resp.send({erro: 'Aluno já cadastrado'})
    
        let l = await db.tb_matricula.create({
            nm_aluno: alu.nome,
            nr_chamada: alu.chamada,
            nm_curso: alu.curso,
            nm_turma: alu.turma
        })
        resp.send(l);
        }catch(e) { resp.send ({erro: 'Ocorreu um erro, o aluno não foi cadastrado'})}

})


si.put('/matricula/:id', async (req,resp) =>{
    try{
        let id = req.params.id;
        let n = req.body;

        let al = await db.tb_matricula.update(
            {
                nm_aluno: n.nome,
                nr_chamada: n.chamada,
                nm_curso: n.curso,
                nm_turma: n.turma
            },
            {
                where: {id_matricula: id}
            });
            resp.sendStatus(200);
    } catch (e){
        resp.send({erro: e.toString()});
    }
})


si.delete('/matricula/:id', async (req,resp) => {
    try{
    let s = await db.tb_matricula.destroy ({where: { id_matricula: req.params.id}});
    resp.sendStatus(200)
    } catch (e){
        resp.send({erro: e.toString()});
    }
})






si.listen(process.env.PORT,
    x => console.log(`>> O servidor subiu na porta  ${process.env.PORT}`))