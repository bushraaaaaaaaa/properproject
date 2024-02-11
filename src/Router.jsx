import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
const Router = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
</Routes>

</BrowserRouter>



    </div>
  )
}

export default Router