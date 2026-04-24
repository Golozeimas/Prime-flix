import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import Filme from "../pages/Filme";
import Erro from "../components/Erro";
import Favoritos from "../pages/Favoritos";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/> } />         
                <Route path="/filme/:id"  element={ <Filme/> } />
                <Route path="/favoritos" element={<Favoritos/>}/>
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes