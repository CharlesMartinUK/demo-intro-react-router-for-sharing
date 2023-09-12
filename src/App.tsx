
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Router from './components/router/router'

import {BrowserRouter  } from 'react-router-dom'

function App() {
  return (
   <>
    <BrowserRouter>
		<Router />
	</BrowserRouter>
   
   /*
     <Header/>
     <main className='p-6' style={{flex:'1'}}>
      <Home/>
      </main>    
     <Footer/>
	 */
   </>
  );
}

export default App;
