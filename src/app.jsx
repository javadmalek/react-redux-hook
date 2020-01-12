import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index.js';

import ErrorBoundary from './error/error_boundary.js.jsx';
import WeatherContainer from './components/weather_container.js';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <WeatherContainer />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
