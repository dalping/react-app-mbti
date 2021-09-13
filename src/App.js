import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import {Route, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';

import Test from './components/Test';

function App() {

  const [mbti, setMbti] = useState([]);

  const onMbti = (type) => {
    setMbti(type)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Route exact path="/result">
            <Main mbti={mbti}/>
          </Route>
          <Route exact path="/">
            <Test onMbti={onMbti}/>
          </Route>
          {/* <Main/> */}
        
      </div>
    </BrowserRouter>
  );
}

export default App;
