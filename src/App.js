 import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import Books from './components/Books';



import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import State from './components/State';
import Parent from './components/Parent';
import Form from './components/Form';
import Myform from './components/Myform';
import BookDum from './components/BookDum';

 

function App() {
  return (

        <>
        {/* <h1>Hello React App !</h1>
        <Home/>
        <Header/>
        <Sidebar/>
        <Navbar/>
  */}

  <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/state' element={<State/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/parent' element={<Parent/>} />
        <Route path='/form' element={<Form/>} />
        <Route path='/myform' element={<Myform/>} />
        <Route path='/bookDum' element={<BookDum/>} />
        
         
      </Routes>
    
  </Router>




        
        </>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
