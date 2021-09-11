import Cabecalho from "../components/cabecalho/index"
import ContainerMenu from "../components/menu/index"
import {Container} from "./styled"


export default function conteudo(){
    return(
        <Container>
            <ContainerMenu/>
              <Cabecalho/>

              <div class="pt2">
            <div class="descricao">
                <div class="barraR"><img src="/assets/linR.svg" alt=""/></div>
                <div class="titulo"><b>Novo Aluno</b></div>
            </div>
            <div class="conteudo">
                <div class="lado1">
                    <div class="pri">
                        <div class="no">Nome:</div>
                        <input type="text"/>
                    </div>
                    <div class="seg">
                        <div class="c">Curso:</div>
                        <input type="text"/>
                    </div>
                </div>
                <div class="lado2">
                    <div class="ter">
                        <div class="ch">Chamada:</div>
                        <input type="text"/>
                    </div>
                    <div class="qua">
                        <div class="t">Turma:</div>
                        <input type="text"/>
                    </div>
                    <div class="bota">
                        <button>Cadastrar</button>
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
                  </tr>
                </thead>
                <tbody>
                <tr class="resultados">
                    <td>1</td>
                    <td>Heloysa</td>
                    <td>4</td>
                    <td>InfoC</td>
                    <td>Informática</td>
                    <td class="alterar">
                        <button>
                            <img src="/assets/alterar (2).svg" alt=""/>
                        </button>
                    </td>
                    <td class="excluir">
                        <button>
                            <img src="/assets/excluir.svg" alt=""/>
                        </button>
                    </td>
                </tr>
                </tbody>
                <tbody>
                <tr class="resultados2">
                    <td>2</td>
                    <td>Fulano da silva</td>
                    <td>5</td>
                    <td>InfoC</td>
                    <td>Informática</td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
                <tbody>
                <tr class="resultados">
                    <td>3</td>
                    <td>Fulano da silva</td>
                    <td>6</td>
                    <td>InfoC</td>
                    <td>Informática</td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
                <tbody>
                <tr class="resultados2">
                    <td>4</td>
                    <td>Fulano da silva</td>
                    <td>7</td>
                    <td>InfoC</td>
                    <td>Informática</td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
                <tbody>
                <tr class="resultados">
                    <td>5</td>
                    <td>Fulano da silva</td>
                    <td>8</td>
                    <td>InfoC</td>
                    <td>Informática</td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
                <tbody>
                <tr class="resultados2">
                    <td>6</td>
                    <td>Fulano da silva</td>
                    <td>9</td>
                    <td>InfoC</td>
                    <td>Informática</td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
                <tbody>
                <tr class="resultados">
                    <td>7</td>
                    <td>Fulano da silva</td>
                    <td>10</td>
                    <td>InfoC</td>
                    <td>Informática</td>
                    <td></td>
                    <td></td>
                </tr>
               </tbody>
               <tbody>
                <tr class="resultados2">
                    <td>8</td>
                    <td>Fulano da silva</td>
                    <td>11</td>
                    <td>InfoC</td>
                    <td>Informática</td>
                    <td></td>
                    <td></td>
                </tr>
              </tbody>
                
            </table>
        </div>
        </Container>
    )
}