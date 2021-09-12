import styled from 'styled-components'

const Container = styled.div`
margin-left: 3em;
background-color: #f5f5f5;



button{
    cursor:pointer;
}

.cabecalho2{
    display:flex;
    flex-direction:row;
    background-color: white;
    margin-left: -3.4em;

    width: 65.9em;
    height: 71px;
    top: 17px;
    left: 16.4em;
    margin-top: -1em;

}



.imgs{
    margin-top: .6em;
    margin-left: 1em;
}

.imagem button{
    padding: 0em;
    border-radius: 3em;
    border: none;
}


.imagem{
    border-right: 10px solid transparent;
    height: 0em;
}



.bolinha{
    margin-left: 2.7em;
}



.n{
    margin-left: 3em;
    margin-top: -1.5em;
    font: 700 1em Roboto;
}



.frase{
    font: 700 1em Roboto;
    align-items: flex-end;

    margin-top: 2em;
}



.opcoes{ 
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    margin-left: 45em;
    margin-top: .5em;
}


.recarregar button{
    display:flex;
    align-items: center;
    border-radius: 50%;
    background-color: #986CDF;
    border: black;
    height: 34px;
    width: 34px;
}



.recarregar{
    border-right: 10px solid transparent;
}

.sair button{
    display:flex;
    align-items: center;
    border-radius: 50%;
    background-color: #986CDF;
    border: black;
    height: 34px;
    width: 34px;
}

.sair{
    border-right: 10px solid transparent;
}

`

export {Container}