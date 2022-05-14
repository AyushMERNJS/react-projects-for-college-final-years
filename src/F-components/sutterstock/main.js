import Images from "./images"
import Videos from "./video"
import Audio from "./audio"
import Layout from "./layout"
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Main = () => {


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Images />}/>
          <Route path="AUDIO" element={<Audio />} />
          <Route path="VIDEO" element={<Videos/>} />
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main