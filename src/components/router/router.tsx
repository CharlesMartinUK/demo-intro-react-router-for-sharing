import { Routes, Route } from 'react-router-dom'

import Home from '../home/home'
/*
import Contact from '../contact/contact'
import Complaints from '../complaints/complaints'


<Route path = 'contact' element={<Contact/>} />
			
*/

import MainLayout from '../layouts/main_layouts'

import Products from '../products/products'

import NotFound from '../not_found/not_found'



const Router:React.FC = () => (
	<Routes>
		<Route path="/" element={<MainLayout />} >
			<Route index element={<Home/>} />
			
			<Route path = 'products/:itemId' element={<Products/>} />
			<Route path = '*' element={<NotFound/>} /> 
			
		</Route>
	</Routes>
)

  

export default Router
// what goes here??