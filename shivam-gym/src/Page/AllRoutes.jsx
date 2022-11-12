import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Home from "./Home"
import SignUp from './SignUp'
import About from './About'


function AllRoutes() {
    return (
        <>


            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign_up" element={<SignUp />}></Route>
                <Route path='/about' element={<About/>}></Route>
            </Routes>

        </>
    )
}

export default AllRoutes