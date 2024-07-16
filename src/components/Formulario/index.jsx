import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ContainerForm = styled.form`
  width: 80%;
  text-align: left;
  margin: 50px auto;
`;

const TitleMain = styled.h3`
  font-size: 36px;
  font-weight: 600;
  margin: 30px 0px 20px 0px;
`;

const Item = styled.div`
  margin-top: 10px;
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin: 10px 5px;
  }
`;

const Seleccionar = styled.select`
  width: 37.5vw;
  height: 61px;
  background-color: transparent;
  font-size: 20px;
  font-weight: 600px;
  border: 3px solid var(--Dark-Grey, #262626);
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

const Button = styled.button`
  width: 180.13px;
  height: 54px;
  border-radius: 10px;
  background-color: transparent;
  border: 3px solid var(--text-color);
  color: var(--text-color);
  font-size: 20px;
  font-weight: 900px;
  :hover {
    cursor: pointer;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 40px;
  margin: 30px 0px;
`;

const Items = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const Comentario = styled.textarea`
  font-family: var(--font);
  background-color: transparent;
  resize: none;
  width: 35vw;
  height: 180px;
  background-color: transparent;
  font-size: 20px;
  font-weight: 600px;
  border: 3px solid var(--Dark-Grey, #262626);
  padding: 15px;
  border-radius: 10px;
  color: var(--text-color);
  outline: none;
`;

const Input = styled.input`
  width: 35vw;
  height: 55px;
  background-color: transparent;
  font-size: 20px;
  font-weight: 600px;
  border: 3px solid var(--Dark-Grey, #262626);
  padding: 0px 15px;
  border-radius: 10px;
  color: var(--text-color);
  outline: none;
`;

function Formulario() {

  const { guardarVideo} = useContext(GlobalContext);

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validar que los campos no estén vacíos y que la categoría no sea "Seleccionar"
      if (!title || !category || category === 'Seleccionar') {
        alert('Por favor, completa todos los campos.');
        return;
      }
      console.log('Video a enviar:', video);
      guardarVideo(video);
    }
      // Crear el objeto video
    const video = {
        title,
        category,
        imageUrl,
        videoUrl,
        description,
      };
  

      

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <TitleMain>Crear Tarjeta</TitleMain>
      <Items>
        <Item>
          <h4>Titulo</h4>
          <Input type="text" placeholder="Ingrese el título" onChange={(e) => setTitle(e.target.value)} />
        </Item>
        <Item>
          <h4>Categoria</h4>
          <Seleccionar defaultValue="Seleccionar" onChange={(e) => setCategory(e.target.value)}>
            <Option value="seleccionar"  hidden>Seleccionar</Option>
            <Option value="front-end">FRONT END</Option>
            <Option value="back-end">BACK END</Option>
            <Option value="full-stack">FULL STACK</Option>
          </Seleccionar>
        </Item>
        <Item>
          <h4>Imagen</h4>
          <Input
            type="url"
            placeholder="Ingrese la url de la imagen de portada"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </Item>
        <Item>
          <h4>Video</h4>
          <Input type="url" placeholder="Ingrese la url del video" onChange={(e) => setVideoUrl(e.target.value)}/>
        </Item>
        <Item>
          <h4>Descripcion</h4>
          <Comentario placeholder="¿De que se trata el video?" onChange={(e) => setDescription(e.target.value)}/>
        </Item>
      </Items>
      <Buttons>
        <Button type="submit">GUARDAR</Button>
        <Button type="reset">LIMPIAR</Button>
      </Buttons>
    </ContainerForm>
  );
}

export default Formulario
