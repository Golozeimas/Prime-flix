import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/App";
import Filme from "../pages/Filme";

function AppRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/> }/>         
                <Route path="/filme/:id"  element={<Filme/>}/>
            </Routes>
        </BrowserRouter>
    )
}


export default AppRoutes