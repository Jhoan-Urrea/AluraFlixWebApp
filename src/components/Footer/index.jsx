import styled from "styled-components"
import LogoImage from "../../assets/images/Logo.svg"

const Pie = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 125px;
    background-color: var(--bg-black);
    border-top: 4px solid var(--Blue, #2271D1);
    box-shadow: 0px 5px 29px 0px #2271D1B2;

    img{
    width: 168.45px;
    height: 40px;
    }
`;

const LogoContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;




function Footer (){
    return (
        <Pie>
            <LogoContainer>
                <img src={LogoImage} alt="logo"></img>
            </LogoContainer>
        </Pie>
    )
}
export default Footer