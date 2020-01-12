import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index.js';

import ErrorBoundary from './components/error_boundary.js';
import WeatherContainer from './components/weather_container.js';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div className="App">
          <WeatherContainer />
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
