import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CITY_ACTIONS } from '../store/index.js';

import styled from 'styled-components'

const ActionButton = styled.button`
    background-color: cornflowerblue;
    color: white;
    border-radius: 5px;
    width: 100%;
    margin-top: 1em;
    padding: 0.5em;
    font-weight: 700;
`;

const ShowCities = (props) => {
  const { cities } = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderCity = ({
    value, label, max, min,
  }, index) => (
    <div key={index} className="show-cities__city">
      <h2><strong>{label}</strong></h2>
      <span><strong>Max:</strong>{max}&#8451;</span>
      <span><strong>Min:</strong>{min}&#8451;</span>
      <ActionButton onClick={() => dispatch({ type: CITY_ACTIONS.REMOVE_CITY, value })}>Remove</ActionButton>
    </div>
  );

  return (
    <div className="show-cities">
      {cities && cities.map(renderCity)}
    </div>
  );
};

export default ShowCities;
