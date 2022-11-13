import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from './Login'
import Home from "./Home"
import SignUp from './SignUp'
import About from './About'
import Food from './Food'
import Exercise from './Exercise'


function AllRoutes() {
    return (
        <>


            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign_up" element={<SignUp />}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/food' element={ <Food/> }></Route>
                <Route path='/exercise' element={ <Exercise/> }></Route>
            </Routes>

        </>
    )
}

export default AllRoutes