
import { Route, Routes } from "react-router-dom"

import Home from "../../modules/quiz/Home"
import Register from "../../modules/user/pages/Register"
import NotFound from "../components/error"
import AboutPage from "@/modules/user/pages/About"
import Login from "@/modules/user/pages/Login"
import FeaturesPage from "@/modules/user/pages/Features"

const AppRoutes = () =>{
    return (<>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/features" element={<FeaturesPage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    
    </>)
}

export default AppRoutes;