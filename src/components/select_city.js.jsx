import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const options = [
  { value: 'tehran', label: 'Tehran' },
  { value: 'berlin', label: 'Berlin' },
  { value: 'gorgan', label: 'Gorgan' },
  { value: 'bangkok', label: 'Bangkok' },
  { value: 'melbourne', label: 'Melbourne' },
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
