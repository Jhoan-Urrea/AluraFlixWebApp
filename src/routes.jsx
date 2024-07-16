import BasePage from "./pages/Base";

//ejecutar instalacion |npm i react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NewVideo from "./pages/NewVideo";

function AppRoutes (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage/>}>
                    <Route index element={<Home/>}/>
                    <Route path="nuevovideo" element={<NewVideo/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    );

}

export default AppRoutes