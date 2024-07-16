import styled from "styled-components";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import useVideoModal from "../../hooks/useVideoModal";

const Card = styled.div`
  width: 30vw;
  border-radius: 20px; 
  background-color: ${props => props.color};
  border: 5px solid ${props => props.color};
  margin: 10px 0px 0px 0px;
  box-shadow: 0px 0px 10px 0px ${props => props.color} ;

`;

const ImageCard = styled.img`
    width: 100%;
    border-radius: 15px 15px 0px 0px;


`;

const IconCard = styled.img`
width: 25.43px;
height: 59px;
margin-right: 10px;
`;


const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: var(--text-color);
  font-size: 16px;
  font-weight: 800;
  border: none;

`;

const Buttons = styled.div`
  width: 100%;
  border-radius: 0px 0px 15px 15px;
  display: flex;
  background-color: var(--bg-black);
  align-items: center;
  justify-content: space-evenly;

  Button:hover{
    cursor: pointer;
  }

`;

function CardVideo({ video, image, alt, color, videoUrl }) {
  
  const handleCardClick = () => {
    // Redirige al usuario a la URL del video
    // window.location.href = videoUrl;
    window.open(videoUrl, '_blank');
    console.log("direccion:", videoUrl)
};

  const { abrirModal } = useVideoModal();

  return (
    <Card color={color}  >
      <ImageCard src={image} alt={alt} color={color} onClick={handleCardClick} />
      <Buttons color={color}>
        <Button>
          <IconCard src={deleteIcon} alt="delete icon" />
          BORRAR
        </Button>
        <Button onClick={() => abrirModal(video)}>
          <IconCard src={editIcon} alt="edit icon" />
          EDITAR
        </Button>
      </Buttons>
    </Card>
  );
}

export default CardVideo;
