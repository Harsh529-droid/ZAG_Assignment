import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './components/Update'

function App() {

  return (

    <>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossorigin="anonymous" />
      </head>
      <BrowserRouter>
          <Routes>
             <Route path = "/" element = {<Home/>} />
             <Route path = "/update/:id" element = {<Update/>} />
          </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
