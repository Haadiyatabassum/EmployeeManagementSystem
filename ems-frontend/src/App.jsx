import React from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      {/* //http:localhost:3000 */}
      <Route path='/' element={<ListEmployeeComponent/>}></Route>

       {/* //http:localhost:3000/employees */}
        <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
        
        {/* //http:localhost:3000/employees/add-Employee */}
        <Route path='/add-employee'  element={<EmployeeComponent/>}></Route>

         {/* //http:localhost:3000/employees/edit-Employee */}
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}></Route>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App