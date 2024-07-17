import React from 'react';
import { useForm } from '../context/FormContext';

const FormDataDisplay: React.FC = () => {
  const { state } = useForm();

  return (
    <div>
      <h3>Form Data:</h3>
      <ul>
        {state.inputs.map(input => (
          <li key={input.id}>{(input.props.name && input.props.name.length > 0) ? input.props.name : input.type}: {input.type != 'checkbox' ? (input.props.value || 'Not set') : (input.props.checked ? "checked" : "unchecked")}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormDataDisplay;