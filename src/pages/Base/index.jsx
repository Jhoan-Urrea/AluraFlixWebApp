
import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GlobalContextProvider from "../../context/GlobalContext";


function BasePage (){
    return(
        <main>
            <Header/>
            <GlobalContextProvider>
                <Container>
                    <Outlet/>
                </Container>
            </GlobalContextProvider>
            <Footer/>
        </main>
    );

}
export default BasePage