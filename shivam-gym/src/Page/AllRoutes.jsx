import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './Login'
import Home from "./Home"


function AllRoutes() {
    return (
        <>
         

         <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>


         </Routes>

        </>
    )
}

export default AllRoutes