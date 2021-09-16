import Cabecalho from "../components/cabecalho/index"
import ContainerMenu from "../components/menu/index"
import { useEffect, useState, useRef } from "react";
import {Container} from "./styled"
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';


import Api from '../services/api'
const api = new Api();


export default function Conteudo(){

    const loading = useRef(null);
    
    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [turma, setTurma] = useState('');
    const [curso, setCurso] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

  




     async function listar() {
         let r = await api.listar();
         setAlunos(r);
     }


     async function inserir() {
        loading.current.continuousStart();
 
         if(idAlterando === 0) {

            if (!nome || nome.replace === '' )
            return toast.error('O nome do aluno é obrigatório'); 
            loading.current.complete();
       
            if ( nome.length <= 4)
            return toast.error('O campo nome precisa ter mais do que 4 caracteres'); 
            loading.current.complete();
       
            if (chamada < 0 )
            return toast.error('O número da chamada não pode ser negativo'); 
            loading.current.complete();

            if (chamada != parseInt(chamada))
            return toast.error('Letras não podem ser utilizadas na chamada');
            loading.current.complete();

            if (!chamada || chamada.replace === '')
            return toast.error('O número da chamada é obrigatório'); 
            loading.current.complete();
       
            if (!turma|| turma.replace === '')
            return toast.error('O nome da turma é obrigatório'); 
            loading.current.complete();

            if (turma == parseInt(turma))
            return toast.error('Números não podem ser utilizadas na turma');
            loading.current.complete();
       
            if (!curso || curso.replace === '')
            return toast.error('O nome do curso é obrigatório'); 
            loading.current.complete();

            if (curso == parseInt(curso))
            return toast.error('Números não podem ser utilizadas no curso');
            loading.current.complete();


         let r = await api.inserir(nome, chamada, curso, turma);
         if(r.erro) 
             toast.error(`${r.erro}`); 
         else
             toast.success('Aluno inserido!');
          } else {
         let r = await api.alterar(idAlterando, nome, chamada, curso, turma);
         if(r.erro) 
             toast.error(`${r.erro}`); 
           else 
             toast.success('O aluno foi alterado!');
     }
    
     limparCampos();
     listar();
    }

     function limparCampos() {
        setNome('');
        setChamada('');
        setCurso('');
        setTurma('');
        setIdAlterando(0);
     }


      function deletar(id){
         confirmAlert({
             title: "Remover aluno",
             message: `Tem certeza que deseja remover o aluno ${id} ?`,
             buttons:[
                 {
                     label: 'sim',
                     onClick: async () => {
                         let r = await api.deletar(id);
                         if (r.erro)
                           toast.error(`${r.erro}`);
                        else {
                            toast.dark('O aluno foi removido!');
                            listar();
                        }
                     }
                 },
                 {
                     label:'Não'
                 }
             ]
         });
     }

     async function alterar(item) {

         setNome(item.nm_aluno);
         setChamada(item.nr_chamada);
         setCurso(item.nm_curso);
         setTurma(item.nm_turma);
         setIdAlterando(item.id_matricula);

        
     }


     useEffect(() => {  
        listar();
     }, [])




    return(
        
        <Container>
            <ToastContainer/>
            <LoadingBar color='#f11946' ref={loading} />
            <ContainerMenu/>
              <Cabecalho/>

              <div class="pt2">
            <div class="descricao">
                <div class="barraR"><img src="/assets/linR.svg" alt=""/></div>
                <div class="titulo">{idAlterando === 0 ? "Novo Aluno" : "Alterando aluno" + idAlterando}</div>
            </div>
            <div class="conteudo">
                <div class="lado1">
                    <div class="pri">
                        <div class="no">Nome:</div>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div class="seg">
                        <div class="c">Curso:</div>
                        <input type="text" value={curso} onChange={e => setCurso(e.target.value)}/>
                    </div>
                </div>
                <div class="lado2">
                    <div class="ter">
                        <div class="ch">Chamada:</div>
                        <input type="text" keyboardType="numeric" value={chamada} onChange={e => setChamada(e.target.value)}/>
                    </div>
                    <div class="qua">
                        <div class="t">Turma:</div>
                        <input type="text" value={turma} onChange={e => setTurma(e.target.value)}/>
                    </div>
                    <div class="bota">
                        <button onClick={inserir}>{idAlterando === 0 ? "Cadastrar" : "Alterar"}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="pt3">
            <div class="descricao2">
                <div class="barraR2"><img src="/assets/linR.svg" alt=""/></div>
                <div class="titulo2"><b>Alunos Matriculados</b></div>
            </div>
            <table class="tabela">
                <thead>
                  <tr class="campos">
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Chamada</th>
                    <th>Turma</th>
                    <th>Curso</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                    {alunos.map((item,i) =>
                <tr class= {i%2 === 0 ? "resultados" : "resultadosCinza"}>
                    <td> {item.id_matricula}</td>
                    <td title={item.nm_aluno}>{item.nm_aluno != null && item.nm_aluno.length >= 25 ? item.nm_aluno.substr(0,25) + '...' : item.nm_aluno}</td>
                    <td>{item.nr_chamada}</td>
                    <td>{item.nm_turma}</td>
                    <td>{item.nm_curso}</td>
                    <td></td>
                    <td class="boto">
                        <button onClick={()=> alterar(item)}>
                            <img src="/assets/alterar (2).svg" alt=""/>
                        </button>
                    </td>
                    <td class="boto">
                        <button onClick={()=>  deletar(item.id_matricula)}>
                            <img src="/assets/excluir.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                )}
                </tbody>
                
            </table>
        </div>
        </Container>
    )
}