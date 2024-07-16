import styled from "styled-components"


const TagCategory = styled.h3`
display: block;
width: 30.6vw;
height: 70px;
font-size: 32px;
font-weight: 800;
background-color: ${props => props.color};
align-content: center;
color: var(--text-color);
border-radius: 15px;
`;

const VideosCategoria = styled.div`
display: flex;
gap: 10px;

`;


function Category ({title, color, children, llave}){
return (
    <>
        <TagCategory color={color}>{title}</TagCategory>
        {children}
    </>
    
)
}

export default Category