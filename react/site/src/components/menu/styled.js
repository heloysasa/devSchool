import styled from 'styled-components'

const ContainerMenu = styled.div`
    background-color: #f5f5f5;


button{
    cursor:pointer;
}

.lado-esquerdo{
position: fixed;
width: 18em;
height: 100VH;
left: 0px;
top: 0px;

background: #2B3031;
}


.cabecalho{
    display:flex;
    flex-direction:row;
    margin: 2em;
    align-items: center;
    justify-content: center;
}


.logo{
    border-right: 10px solid transparent;
}



.nome{
    font: 700 1.2em Roboto;
}

span{
    color: #EA10C7;
}


.barra{
   background-color: #262626;
   color: #262626;
   height: 3em;
}


.especificacoes{
    display:flex;
    flex-direction:row;
    
    justify-content: space-between;

}


.opcao{
    font: 700 1.2em Roboto;
    color:white;
    margin-left: 2em;
    padding-top:0.5em;
}


.setinha{
    margin-top: 0.5em;
    margin-right: 1em;
}


.al{
    display:flex;
    flex-direction:row;
    background-color: white;
    height: 3em;
    margin-top: 2em;
}


.barra-rosa{}




.click{
    font: 700 1.2em Roboto;
    margin: .5em 2em;
}

`

export { ContainerMenu}