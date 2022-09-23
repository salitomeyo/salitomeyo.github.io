import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { About } from "../pages/About";
import { Home } from "../pages/Home";


export const AppRouter = () => {
    return(
        <>
            <Sidebar />
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/about" element={ <About /> }/>
            </Routes>
        </>
    )
}

