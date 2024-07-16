import styled from "styled-components"
import Formulario from "../../components/Formulario";

const Container = styled.div`
width: 100%;
height: 100%;
box-sizing: border-box;
padding: 20px;
background-color: transparent;
color: var(--text-color);

h2{
font-size: 50px;
font-weight: 900;
text-align: center;
margin: 10px 0px 20px 0px;
}
span{
    
    font-size: 18px;
    font-weight: 400;
}
`;


function NewVideo (){

return(
<Container>
    <h2>NUEVO VIDEO</h2>
    <span>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</span>
    <Formulario/>
</Container>
)

}

export default NewVideo