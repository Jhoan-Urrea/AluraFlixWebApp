import CardVideo from "../CardVideo";
import image from "../../assets/images/image-const-let-var.jpeg";
import styled from "styled-components";
import Category from "../Category";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useEffect, useState } from "react";

const VideosSection = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

const Container = styled.div`
width: 100%;
padding: 20px;
box-sizing: border-box;
`;

function VideosContainer( {category, color}) {

  const { state} = useContext(GlobalContext);

  const [ categorias, setCategoria] = useState([{
    id:"1",
    title: "BACK END",
    color: "#00C86F"
  },
  {
    id:"2",
    title: "FRONT END",
    color: "#6BD1FF"
  },
  {
    id:"3",
    title: "FULL STACK",
    color: "#FFBA05"
  }
]);



  return (
    <Container>
        {/* <Category title={category} color={color}/>
        <VideosSection>
        {state.videos.map((video)=>{
          return <CardVideo {...video} key={video.id} image={video.imageUrl} color={color} video={video} videoUrl={video.videoUrl}/>
        })}
        </VideosSection> */}
        {categorias.map((categoria, index) => (
  <Category key={index} title={categoria.title} color={categoria.color}>
    <VideosSection>
    {state.videos
      .filter((video) => video.category.toLowerCase() === categoria.title.toLowerCase())
      .map((video) => (
        <CardVideo
          {...video}
          key={video.id} // Asegúrate de que video.id sea único
          image={video.imageUrl}
          color={categoria.color}
          video={video}
          videoUrl={video.videoUrl}
        />
      ))}
    </VideosSection>
  </Category>
))}

    </Container>
  );
}

export default VideosContainer;
