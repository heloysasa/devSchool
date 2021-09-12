import styled from 'styled-components'

const Container = styled.div`
margin-left: 18em;
background-color: #f5f5f5;

body {
    margin: 0;
  }
  
  * {
    box-sizing: border-box;
  }

 

button{
    cursor:pointer;
}



.pt2{
    background-color: white;
    margin: 8em 4em 4em 4em;
    height: 13em;
}



.descricao{
    display:flex;
    flex-direction:row;
    height:6em;
    margin-top: -4em;
    margin-left: 5em;
    padding-top: 1em;

}




.barraR{

}


.titulo{
    font: 700 1.5em Roboto;
    
    margin-left: 1em;

}




.conteudo{
    margin-bottom: 4.5em;
    margin-left: 5em;
}




.lado1{
    display:flex;
    flex-direction:row;
    margin-left: 1.5em;
    
}




.pri{
    display:flex;
    flex-direction:row;
}


.no{
    font: 700 1em Roboto;
}



.seg{
    display:flex;
    flex-direction:row;
    margin-left: 1.3em;
}



.c{
    font: 700 1em Roboto;
}



.lado2{
    display:flex;
    flex-direction:row;
    margin-top: 1em;
}



.ter{
    display:flex;
    flex-direction:row;
    font: 700 1em Roboto;
}



.ch{}




.qua{
    display:flex;
    flex-direction:row;
    font: 700 1em Roboto;
    margin-left: 1em;
}



.t{}


input{
    
    width: 15em;
    height: 2em;
    border: 8px;
    box-sizing: border-box;
    border-radius: 5px;
    padding-left: .5em;
    outline-style: auto;
}

.bota{
    margin-left: 1.5em;
    margin-top: -.3em;

}



.bota button{
    background-color:#EA10C7;
    color:white;
    border:black;
    font: 700 1em Roboto;
    border-radius: 3em;
    padding: .5em .7em;
}


.pt3{
    height: 24em;
    background-color: white;
    margin-left:4em;
    margin-right:4em;
    height:90vh;
    
    overflow: hidden;
    overflow-y: scroll;
    height: 2500px;
    max-height: 300px;
}




.descricao2{
    display:flex;
    flex-direction:row;
    
    font: 700 1.5em Roboto;
    height: 2em;
    margin-top: 2em;
    margin-left: 3.6em;
    margin-bottom: 1em;
    padding-top: .6em;

}


.barraR2{}




.titulo2{
    font: 700 1em Roboto;
    height: 7em;
    
    margin-left: 1em;

}


.tabela{

    font: 700 1em Roboto;
    margin-left: 2em;
    margin-right: 2em;
    width: calc(100% - 4em);
    border-collapse: collapse;
    text-align: left;

}

th,td {
    padding: 1em;
 }



.campos{
    align-items: center;
    justify-content: space-between;
    background-color: #986CDF;
    color:white;
    height: 3em;
}




.resultados{
    justify-content: space-between;
}


.boto button{
    background-color:#565656;
    border-radius: 50%;
    padding: .4em .4em;
    border: none;
    margin-left: -2em;
}


.boto{
    border-right: 10px solid transparent;
    border-radius: 5em;
    visibility: hidden;
}


tr:hover{
    .boto{
        visibility: visible;
    }
}




.resultadosCinza{
    background-color: #f5f5f5;
}
`

export{Container}