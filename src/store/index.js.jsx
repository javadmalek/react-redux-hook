import { createStore } from 'redux';

const INITIAL_STATE = {
  cities: [], // city: { value: 'tehran', label: 'Tehran', min: 5, max: 8 }
};

export const CITY_ACTIONS = {
  ADD_CITY: 'addCity',
  REMOVE_CITY: 'removeCity',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CITY_ACTIONS.ADD_CITY:
      const newCities = [...state.cities, action.newCity];
      newCities.sort((a, b) => (a.max < b.max ? 1 : -1));
      return { ...state, cities: newCities };

    case CITY_ACTIONS.REMOVE_CITY:
      const tmpCities = state.cities.filter(({ value }) => value !== action.value);
      return { ...state, cities: tmpCities };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
