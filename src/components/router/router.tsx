import { Routes, Route } from 'react-router-dom'

import Home from '../home/home'
/*
import Contact from '../contact/contact'

<Route path = 'contact' element={<Contact/>} />
			<Route path = 'complaints' element={<Complaints/>} />
			
import Complaints from '../complaints/complaints'

			
*/

import Help from '../help/help'
import MainLayout from '../layouts/main_layouts'
import Products from '../products/products'
import NotFound from '../not_found/not_found'
import About from '../about/about'


const Router:React.FC = () => (
	<Routes>
		<Route path="/" element={<MainLayout />} >
			<Route index element={<Home/>} />
			<Route path='/help' element={<Help/>} />
			<Route path='/about' element={<About/>} />
			<Route path='/products' element={<Products/>} />
			<Route path = '*' element={<NotFound/>} /> 
			
		</Route>
	</Routes>
)

  

export default Router
// what goes here??