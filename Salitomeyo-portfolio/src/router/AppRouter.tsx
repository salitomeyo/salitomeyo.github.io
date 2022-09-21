import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";


export const AppRouter = () => {
    return(
        <>
            <Sidebar />
            <Routes>
                <Route path="/" element={ <Layout /> }/>
            </Routes>
        </>
    )
}

