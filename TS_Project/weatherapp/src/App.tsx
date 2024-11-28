import React from 'react';

import {Route,Routes} from 'react-router-dom';
import {Home} from './components/Home';
import { CountryDetails } from './components/CountryDetails';


function App() {
  
    return (
      <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<CountryDetails />} />
      </Routes>
  </div>
  
  );
}

export default App;