import { Container } from "./styled"

export default function index(){
    return(
        <Container>
            <div class="cabecalho2">
            <div class="imgs">
                <div class="imagem"><button><img src="/assets/img-pro.svg"/></button></div>
                <div class="bolinha"><img src="/assets/notificacao-b.svg"/></div>
                <div class="n">3</div>
            </div>
            <div class="frase">Olá, <b>Bruno de Oliveira</b></div>
            <div class="opcoes">
                <div class="recarregar">
                    <button>
                        <img src="/assets/recarregar.svg"/>
                    </button>
                </div>

                <div class="sair">
                    <button>
                        <img src="/assets/sair.svg"/>
                    </button>
                </div>
                
            </div>
        </div>
        </Container>
    )
}