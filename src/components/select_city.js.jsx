import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const options = [
  { value: 'tehran', label: 'Tehran' },
  { value: 'berlin', label: 'Berlin' },
  { value: 'gorgan', label: 'Gorgan' },
  { value: 'bangkok', label: 'Bangkok' },
  { value: 'melbourne', label: 'Melbourne' },
  { value: 'las_vegas', label: 'Las Vegas' },
  { value: 'turin', label: 'Turin' },
  { value: 'rome', label: 'Rome' },
  { value: 'milan', label: 'Milan' },
  { value: 'london', label: 'London' },
];

const SelectCity = ({ selectedCity, onSelectCityChangeFn }) => (
  <div>
    <h1>Weather Monster</h1>
    <Select
      value={selectedCity}
      onChange={onSelectCityChangeFn}
      options={options}
    />
  </div>
);

SelectCity.propTypes = {
  onSelectCityChangeFn: PropTypes.func,
  selectedCity: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
};

SelectCity.defaultProps = {
  onSelectCityChangeFn: () => {},
  selectedCity: null,
};

export default SelectCity;
