import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre/Sobre";
import Portifolio from "../pages/Portfolio/Portfolio";
import Comentarios from "../pages/Comentarios/Comentarios";
import Menu from "../components/Menu/Menu";

function ApplicationRoutes() {
    return(
        <BrowserRouter>

            <Menu />
                <Routes>
                    <Route path="/" element={<Sobre />} />
                    <Route path="portfolio" element={<Portifolio/>} />
                    <Route path="comentarios" element={<Comentarios />} />
                </Routes>
        </BrowserRouter>

    )
}

export default ApplicationRoutes

