import React from 'react';
import { Provider } from 'react-redux';
import store from './rematch/index';
import Weather from './components/Weather';

const App: React.FC = () => (
  <Provider store={store}>
      <Weather />
  </Provider>
);

export default App;
