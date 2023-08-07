 import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
<<<<<<< Updated upstream
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App"> 
    <Navbar/>
      <h1> "Hello i am "</h1>

      <h2>hii i am viram</h2>
  
      <h1> "Hello i am sh  "</h1>

      <h1> "Hello i am vinay "</h1> 
      

=======
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar'
import Guidenav from './components/Guidenav';
import Image from './components/Imageslide'
function App() {
  return (
    <div className="App">
      <Guidenav/>
      <Navbar/>
      <Image/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
