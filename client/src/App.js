import React, {useState} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Form from "./Components/Form/Form"
import Otp from './Components/Otp/Otp';
import {AppContext} from "./AppContext"


function App() {
  const [number, setNumber] = useState("")
  return (
    <AppContext.Provider value={{number:number,setNumber:setNumber}}>
   <Router>
     <Route exact path="/" component={Form} />
     <Route path="/verify" component={Otp} />
   </Router>
   </AppContext.Provider>
  );
}

export default App;
