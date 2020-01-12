import { createStore } from 'redux';

const INITIAL_STATE = {
  cities: [],
};

export const CITY_ACTIONS = {
  ADD_CITY: 'addCity',
  REMOVE_CITY: 'removeCity',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CITY_ACTIONS.ADD_CITY:
      // sort cities
      return { ...state, cities: [...state.cities, action.title] };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
