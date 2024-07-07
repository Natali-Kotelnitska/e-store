import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filter = ({ options, value, label, onChange }) => {

  return (
    <FormControl sx={{ mr: 6, minWidth: 200 }}>
      <InputLabel id={`${value}-label`}>{label}</InputLabel>
      <Select
        labelId={`${value}-label`}
        value={value}
        label={label}
        onChange={onChange}
      >
        <MenuItem value={""}>All {label}</MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
