import { Link } from "react-router-dom"
import logo from "../../assets/images/Logo.svg"
import HeaderLink from "../HeaderLink";
import styled from "styled-components";

const Cabecera = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1em 10em;
    background-color: var(--bg-black);
    border-bottom: 4px solid var(--Blue, #2271D1);
    box-shadow: 0px 5px 29px 0px #2271D1B2;
    a{
        text-decoration: none;
    }
    img{
    align-self: start;
    width: 168.45px;
    height: 40px;
    }
    nav{
    display: flex;
    gap: 25px;
    }
`;

const LogoContainer = styled.section`
    height: 40px;
    display: flex;
    align-items: center;
`;


function Header (){
    return(
        <Cabecera>
            <Link to="/">
                <LogoContainer>
                    <img src={logo} alt="Logo AluraFlix"/>
                </LogoContainer>
            </Link>
            <nav>
                <HeaderLink url="./">
                HOME
                </HeaderLink>
                <HeaderLink url="./nuevovideo">
                NUEVO VIDEO
                </HeaderLink>
            </nav>
        </Cabecera>
    );

}
export default Header