import {BrowserRouter as Router,Route} from 'react-router-dom';
import Form from "./Components/Form/Form"
import Otp from './Components/Otp/Otp';


function App() {
  return (
   <Router>
     <Route exact path="/" component={Form} />
     <Route path="/verify" component={Otp} />
   </Router>
  );
}

export default App;
