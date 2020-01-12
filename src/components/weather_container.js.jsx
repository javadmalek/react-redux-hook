import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SelectCity from './select_city.js.jsx';
import ShowCities from './show_cities.js.jsx';

const WeatherContainer = (props) => {
//   const { cities } = useSelector((state) => state);
//   const dispatch = useDispatch();

  return (
    <div>
      <SelectCity />
      <ShowCities />
    </div>
  );
};

export default WeatherContainer;
