import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container, Grid, Box, Typography } from "@mui/material"
import "./App.css"

import Home from "./pages/Home"
import SearchAppBar from "./components/SearchAppBar"
import Tour from "./pages/Tour"

const App = () => (
  <BrowserRouter>
    <SearchAppBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tour/:id" element={<Tour />} />
    </Routes>
  </BrowserRouter>
)

export default App
