import styled from "styled-components";
import image from "../../assets/images/programador.png";

const BackgroundBanner = styled.div`
  background-image: url(${image});
  width: 100%;
  height: 832px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Gradient = styled.div`
  align-items: center;
  justify-content: center;
  background: #0012338f;
  height: 100%;
  width: 100%;
`;

const BillBoard = styled.section`
display: flex;
  width: 90%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 auto;
  
`;

const Information = styled.div`
  width: 50%;
  border-radius: 15px 0px 0px 0px;
  text-align: justify;
  color: var(--text-color);
  padding: 0 20px;
  h2 {
    width: fit-content;
    background-color: ${(props) => props.color};
    font-size: 48px;
    font-weight: 800;
    border-radius: 15px;
    padding: 10px 40px;
  }
  h3{
    font-size: 46px;
    font-weight: 400;
    margin: 0px;
  }
  p{
    font-size: 18px;
    font-weight: 300;
  }
`;

const CardBanner = styled.img`
  width: 50%;
  border: 5px solid ${(props) => props.color};
  border-radius: 15px;
`;

function Banner({ src, alt, color, category, title, description }) {
  return (
    <BackgroundBanner>
      <Gradient>
        <BillBoard>
          <Information color={color}>
            <h2>{category}</h2>
            <h3>{title}</h3>
            <p>{description}</p>
          </Information>
          <CardBanner src={src} alt={alt} color={color} />
        </BillBoard>
      </Gradient>
    </BackgroundBanner>
  );
}

export default Banner;
