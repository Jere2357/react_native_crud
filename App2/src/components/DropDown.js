import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const DropDown = ({
  type,
  readDataDropdown,
  handleChangeDropDown,
  selectedDestination,
}) => {
  return (
    <RNPickerSelect
      onValueChange={value => handleChangeDropDown(value, type)}
      items={readDataDropdown}
      value={selectedDestination}
    />
  );
};

export default DropDown;
