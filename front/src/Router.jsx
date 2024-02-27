import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Accueil from './pages/Accueil/Accueil'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function Router() {
  

  return (
    <React.StrictMode>
			<BrowserRouter basename="/Kasa">
				<Navbar />
				<Routes>
					
					<Route exact path="/" element={<Accueil />} />
					
					{/* <Route exact path="/annonce/:annonceId"	element={<Annonce />}	/>
					
					<Route exact path="/a-propos" element={<APropos />} />
					
					<Route path="*" element={<Error404 />} /> */}
          
				</Routes>
				<Footer />
			</BrowserRouter>
		</React.StrictMode>
  )
}

export default Router
