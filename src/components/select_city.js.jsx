import React, { useState, useEfect } from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { CITY_ACTIONS } from '../store/index.js';

const options = [
  { value: 'tehran', label: 'Tehran' },
  { value: 'berlin', label: 'Berlin' },
  { value: 'gorgan', label: 'Gorgan' },
  { value: 'bangkog', label: 'Bangkog' },
  { value: 'melbourne', label: 'Melbourne' },
];

const SelectCity = (props) => {
  const { cities } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState(null);

  const checkIsCitiyExist = (selectedItem) => cities.some(({ value }) => value === selectedItem.value);

  const onSelectedItemChange = (selectedItem) => {
    console.log('Option selected:', selectedItem);
    if (checkIsCitiyExist(selectedItem)) {
      alert(`${selectedItem.label} is already selected!...`);
    } else {
      setSelectedItem(selectedItem);
      dispatch({ type: CITY_ACTIONS.ADD_CITY, newCity: { ...selectedItem, max: 5, min: 0 } });
    }
  };

  return (
    <div>
      <h1>Weather Monster</h1>
      <Select
        value={selectedItem}
        onChange={onSelectedItemChange}
        options={options}
      />
    </div>
  );
};

export default SelectCity;
