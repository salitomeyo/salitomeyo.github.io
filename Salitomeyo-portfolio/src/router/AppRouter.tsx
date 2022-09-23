import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Home } from "../pages/Home";


export const AppRouter = () => {
    return(
        <>
            <Sidebar />
            <Routes>
                <Route path="/" element={ <Home /> }/>
            </Routes>
        </>
    )
}

