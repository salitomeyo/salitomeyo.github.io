import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";


export const AppRouter = () => {
    return(
        <>
            <Sidebar />
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/about" element={ <About /> }/>
                <Route path="/projects" element={ <Projects /> }/>
                <Route path="/contact" element={ <Contact /> }/>
            </Routes>
        </>
    )
}

