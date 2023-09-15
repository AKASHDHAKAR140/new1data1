
import './App.css';
import {BrowserRouter,Routes,Route} from"react-router-dom"
import Navbar from "./component/Navbar.js"
import Para2 from "./component/Para2.js"

function App() {
  return (
   <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Para2/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
