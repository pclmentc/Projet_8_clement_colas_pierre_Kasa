import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Accueil from './pages/Accueil/Accueil'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Error404 from './pages/404'


function Router() {
  

  return (
    <React.StrictMode>
			<BrowserRouter basename="/">
				<Navbar />
				<Routes>
					
					<Route exact path="/" element={<Accueil />} />
					<Route path="*" element={<Error404 />} />
          
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
  )
}

export default Router
