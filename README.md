# Weather Monster App

## Project setup
Use the following commands to setup, launch and run the test of application

Clone the public repo with HTTPS `https://github.com/javadmalek/react-redux-hook.git`

```
cd react-redux-hook
npm install
npm start
npm run cypress:open
```
open: `http://localhost:3000` 

- Compiles and hot-reloads for development `npm start`
- Compiles and minifies for production `npm run build`
- Open Cypress to test the application `npm run cypress:open`. In case you want to run the application on a different port, please, update `cypress.json`
- Lints and fixes files `npm run lint`


## File structure

```
.
├── README.md
├── cypress
│   ├── fixtures
│   ├── integration
│   │   ├── element_test.spec.js
│   │   └── functionalities.spec.js
│   ├── plugins
│   └── support
├── cypress.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── manifest.json
└── src
    ├── app.jsx
    ├── app.test.js
    ├── components
    │   ├── select_city.js.jsx
    │   ├── show_cities.js.jsx
    │   └── weather_container.js.jsx
    ├── error
    │   └── error_boundary.js.jsx
    ├── index.css
    ├── index.js
    ├── serviceWorker.js
    └── store
        └── index.js.jsx
```

10 directories, 26 files

## Main Components
- `App` renders as root component and re-use `ErrorBoundary, Store, WeatherContainer` Also, it is a state-less component.
- `ErrorBoundary` catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.
- `Store`  it is a store for redux which contains the list of `cities` and their actions are `ADD_CITY, REMOVE_CITY`.
- `WeatherContainer` is the main container which renders the `SelectCity, ShowCities` and managing a state for their comunications. besides, it take in charge of fetch action.
- `SelectCity` is a stateless component just render the list of cities and call the parent callback.
- `ShowCities` is stateless component that subscribed to Redux-store and receives the list of cities then display in screen and have an action to remove a city


## Cypress Test
There are 3 integration tests as following:
- `Page Element Test` which contains 
  - Cheking hompage is up?
  - Cheking the existance of city select box and its title(Weather Monster)
  - Select city `Gorgan` and `London` from the list
- `Functionality Test` which contains
  - Available endpoint `www.openweathermap.org` API and fetching for London
  - Trying to add London again and checking that the alert message is open?
  - Trying to add London and Gorgan and then find&click on remove London ?

## CSS
- Breakpoint at 1000px, flexbox would renders over column direction
- `BEM` method used for name conventin
- some components are buid styled component not all.
- since it is clearly was mentioned in the task description that CSS and UI would not take into account, I did spend much time for that and it is done as fast as possible.


## Other topics
- babel
- eslinte


## Notes
- Why Redux is used? because it is clearly asked in the task description otherwise it could even more easier to use contextApi or just passing props.
- I had a plan to use the fetch hook for retriving the data, but I ran out of time.
- It is possible to write more test, I just wrote for main boundary cases.
- no internationalisation

