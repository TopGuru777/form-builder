import React, { ChangeEvent } from 'react';
import { InputProps } from '../types';

const SelectInput: React.FC<InputProps & { onChange: (e: ChangeEvent<HTMLSelectElement>) => void; }> = ({ name, options=[], onChange, value }) => (
  <select name={name} onChange={onChange} value={value}>
    {options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default SelectInput;