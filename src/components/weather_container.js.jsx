import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import camelcaseKeys from 'camelcase-keys';
import SelectCity from './select_city.js.jsx';
import ShowCities from './show_cities.js.jsx';
import { CITY_ACTIONS } from '../store/index.js';


const parseData = (data) => camelcaseKeys(data, { deep: true });
const fToC = (fTemp) => ((fTemp - 32) * (5 / 9));

const WeatherContainer = (props) => {
  const { cities } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [selectedCity, setSelectedCity] = useState(null);

  const fetchData = ({ value, label }) => {
    const fetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${label}&appid=b57063f9b1a65d47833f68e3c4a3d415`;
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        const { main } = parseData(data);
        const newCity = {
          value, label, max: fToC(main.tempMax).toFixed(2), min: fToC(main.tempMin).toFixed(2),
        };

        dispatch({
          type: CITY_ACTIONS.ADD_CITY,
          newCity,
        });
        console.log('parseData(data) >>>', parseData(data));
        return parseData(data);
      })
      .catch((error) => console.log(error));
  };

  const checkIsCitiyExist = (newCity) => cities.some(({ value }) => value === newCity.value);
  const onSelectCityChange = (newCity) => {
    if (checkIsCitiyExist(newCity)) {
      alert(`${newCity.label} is already selected!...`);
    } else {
      setSelectedCity(newCity);
      fetchData(newCity);
    }
  };

  return (
    <div>
      <SelectCity selectedCity={selectedCity} onSelectCityChangeFn={onSelectCityChange} />
      <ShowCities />
    </div>
  );
};

export default WeatherContainer;
