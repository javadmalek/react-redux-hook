import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CITY_ACTIONS } from '../store/index.js';

const ShowCities = (props) => {
  const { cities } = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderCity = ({
    value, label, max, min,
  }, index) => (
    <div key={index}>
      <span>{label}</span>
      <span>Max: {max}</span>
      <span>Min: {min}</span>
      <button onClick={() => dispatch({ type: CITY_ACTIONS.REMOVE_CITY, value })}>Remove</button>
    </div>
  );

  return (
    <div>
      {cities && cities.map(renderCity)}
    </div>
  );
};

export default ShowCities;
