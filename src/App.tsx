import React from 'react';
import { fetch } from './api/geolocation';

const App: React.FC = () => {
  fetch().then(r => console.log(r.city));
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
    );
  }
  
  export default App;
