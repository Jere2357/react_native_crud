import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const DropDown = ({
  readDataDropdown,
  handleChangeDropDown,
  selectedDestination,
}) => {
  return (
    <RNPickerSelect
      onValueChange={value => handleChangeDropDown(value)}
      items={readDataDropdown}
      value={selectedDestination}
      error
    />
  );
};

export default DropDown;
