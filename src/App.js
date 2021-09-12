import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {Route, BrowserRouter} from 'react-router-dom';

import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Route exact path="/result">
            <Main/>
          </Route>
          <Route exact path="/">
            <Test/>
          </Route>
          {/* <Main/> */}
        
      </div>
    </BrowserRouter>
  );
}

export default App;
