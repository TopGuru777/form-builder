import React, { ChangeEvent } from 'react';
import { InputProps } from '../types';

const CheckboxInput: React.FC<InputProps & { onChange: (e: ChangeEvent<HTMLInputElement>) => void; }> = ({ name, label, onChange, checked }) => (
  <label>
    <input type="checkbox" name={name} onChange={onChange} checked={checked} />
    {label}
  </label>
);

export default CheckboxInput