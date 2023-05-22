import React from 'react';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './Components/Loginpage';
import Signuppage from'./Components/Signuppage';
import Homepage from './Components/Homepage';

import Fetch from './Components/fetch';
import Upload from './Components/Upload';
// import Imageupload from './Components/Imageupload';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Loginpage' element={<Loginpage/>}/>
        <Route path='/Signuppage' element={<Signuppage/>}/>
        <Route path='/Fetch' element={<Fetch/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        {/* <Route path='/Imageupload' element={<Imageupload/>}/> */}
        
        
      </Routes>
    </Router>
  );
}

export default App;
