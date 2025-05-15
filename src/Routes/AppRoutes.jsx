import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import About from "../Pages/about";
import NotFound from "../Pages/NotFound";

export default function AppRoutes() {
    return (
        <>
        {/* lista de rotas */}
        <Routes>
            {/* Ao acessar a rota, carrega a página */}
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<Product />}/>
            <Route path='/about' element={<About />}/>
            {/* Qualquer rota não encontrada será encaminhada para NotFound*/}
            <Route path='*' element={<NotFound />}/>
        </Routes>
        </>
    );
}
