import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import Navigation from "./Routes/Navigation";


export default function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <AppRoutes/>
        </BrowserRouter>
    );
}
