import styled from "styled-components";
import closeIcon from "../../assets/icons/cross.svg";
import useVideoModal from "../../hooks/useVideoModal";

const Overlay = styled.div`
  background-color: rgba(3, 18, 47, 0.76);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const DialogEstilizado = styled.dialog`
  text-align: left;
  position: relative;
  display: flex;
  width: 904px;
  height: fit-content;
  border-radius: 15px;
  border: 5px solid #2271d1;
  justify-content: center;
  background-color: #03122f;
  
  form {

    width: 70%;
    margin: 0px auto;

    button {
      position: absolute;
      top: 4.33px;
      right: 4.33px;
    }
  }
`;

const ButtonIcono = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const TituloEstilizado = styled.h3`
  color: #2271d1;
  font-size: 60px;
  font-weight: 900;
`;

const Item = styled.div`
color: var(--text-color);
display: block;
h4{
    font-size: 20px;
    font-weight: 600;
    margin: 10px 5px;
}
`;
const Items =styled.div`
width: 100%;

`;

const Input = styled.input`
width: 38vw;
height: 55px;
background-color: transparent;
font-size: 20px;
font-weight: 600px;
border: 3px solid #2271d1;
padding: 0px 15px;
border-radius: 10px;
color: var(--text-color);
outline: none;

`;

const Comentario = styled.textarea`
font-family: var(--font);
background-color: transparent;
resize: none;
width: 38vw;
height: 180px;
background-color: transparent;
font-size: 20px;
font-weight: 600px;
border: 3px solid #2271d1;
padding: 15px;
border-radius: 10px;
color: var(--text-color);
outline: none;
`;
const Seleccionar = styled.select`
appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
width: 40.5vw;
height: 61px;
background: transparent;
font-size: 20px;
font-weight: 600px;
border: 3px solid #2271d1;
padding: 0px 15px;
border-radius: 10px;
color: var(--text-color);
outline: none;
`;

const Option = styled.option`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: var(--bg-black);
`;



function ModalZoomEdit() {

  const { estaAbiertoModal, videoSeleccionado, cerrarModal } = useVideoModal();

  return (<>
  {estaAbiertoModal && <>
      <Overlay>
      <DialogEstilizado open={!!videoSeleccionado} onClose={() => cerrarModal()}>
        <form method="dialog">
          <TituloEstilizado>EDITAR CARD:</TituloEstilizado>
          <ButtonIcono formMethod="dialog">
            <img src={closeIcon} alt="cerrar" />
          </ButtonIcono>
          <Items>
        <Item>
            <h4>Titulo</h4>
            <Input type="text" placeholder="Ingrese el título" value={videoSeleccionado.title}/>
        </Item>
        <Item>
            <h4>Categoria</h4>
            <Seleccionar value={videoSeleccionado.category}>
            <Option value="seleccionar"  hidden>Seleccionar</Option>
            <Option value="front-end">FRONT END</Option>
            <Option value="back-end">BACK END</Option>
            <Option value="full-stack">FULL STACK</Option>
            </Seleccionar>
        </Item>
        <Item>
            <h4>Imagen</h4>
            <Input type="url" placeholder="Ingrese la url de la imagen de portada" value={videoSeleccionado.imageUrl}/>
        </Item>
        <Item>
            <h4>Video</h4>
            <Input type="url" placeholder="Ingrese la url del video" value={videoSeleccionado.videoUrl}/>
        </Item>
        <Item>
            <h4>Descripcion</h4>
            <Comentario  placeholder="¿De que se trata el video?" value={videoSeleccionado.description}/>
        </Item>
        </Items>
        </form>
      </DialogEstilizado>
    </Overlay>
    </>}
  </>
  );
}

export default ModalZoomEdit;
