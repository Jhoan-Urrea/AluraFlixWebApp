import Banner from "../../components/Banner"
import imagen from "../../assets/images/player.jpeg"
import VideosContainer from "../../components/VideosContainer"
import ModalZoomEdit from "../../components/ModalZoomEdit"
import { useEffect, useState } from "react"

const category = "FRONT END"
const title = "Challenge React"
const description = "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."


function Home (){

return(
    <>
    <Banner 
        src={imagen} 
        alt="programador" 
        color="#6BD1FF"
        category = {category}
        title = {title}
        description = {description}    
    />
    <VideosContainer category="FRONT END" color="#6BD1FF"/>
    <ModalZoomEdit/>

    </>
)
}
export default Home