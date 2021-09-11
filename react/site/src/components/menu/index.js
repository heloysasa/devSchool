import { ContainerMenu } from "./styled"

export default function index(){
    return(
    <ContainerMenu>
        <div class="lado-esquerdo">
        <div class="cabecalho">
            <div class="logo"><img src="/assets/book.svg"/></div>
            <div class="nome"><span>Dev</span>School</div>
        </div>
        <div class="barra">:|</div>
        <div class="especificacoes">
            <div class="opcao">Gerenciamento</div>
            <div class="setinha"><img src="/assets/setinha.svg"/></div>
        </div>
        <div class="al">
            <div class="barra-rosa"></div>
            <div class="click">Alunos</div>
        </div>
    </div>
   </ContainerMenu>
    )
}