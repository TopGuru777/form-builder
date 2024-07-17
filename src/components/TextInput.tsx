import React, { ChangeEvent } from 'react';
import { InputProps } from '../types';

const TextInput: React.FC<InputProps & { onChange: (e: ChangeEvent<HTMLInputElement>) => void; }> = ({ name, placeholder, onChange, value }) => (
  <input type="text" name={name} placeholder={placeholder} onChange={onChange} value={value} />
);

export default TextInput;