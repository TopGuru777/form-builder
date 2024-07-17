import React from 'react';
import { useForm } from '../context/FormContext';
import TextInput from './TextInput';
import CheckboxInput from './CheckboxInput';
import SelectInput from './SelectInput';
import { InputConfig, InputProps, InputType } from '../types';

const inputComponents = {
  text: TextInput,
  checkbox: CheckboxInput,
  select: SelectInput,
};

const FormBuilder: React.FC = () => {
  const { state, dispatch } = useForm();

  const handleAddInput = (type: InputType) => {
    const id = new Date().getTime().toString();
    if(type != 'select') {
      dispatch({
        type: 'ADD_INPUT',
        payload: { id, type, props: { value: "", checked: false } },
      });
    } else {
      dispatch({
        type: 'ADD_INPUT',
        payload: { id, type, props: { value: "", options: [{ label: "option1", value: "option1"}, { label: "option2", value: "option2"}] } }
      });
    }
  };

  const updateInput = (id: string, type: InputType, props: any) => {
    dispatch({ type: 'UPDATE_INPUT', payload: { id, type, props } });
  };

  return (
    <div>
      {state.inputs.map((input: InputConfig) => {
        const InputComponent = inputComponents[input.type];
        return (
          <InputComponent
            key={input.id}
            {...input.props}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
              const { value } = e.target;
              if (e.target instanceof HTMLInputElement) {
                const { checked } = e.target;
                updateInput(input.id, input.type, { value, checked });
              } else {
                updateInput(input.id, input.type, { value });
              }
            }}
          />
        );
      })}
      <div className='add-control-container'>
        <button onClick={() => handleAddInput('text')}>Add Text Input</button>
        <button onClick={() => handleAddInput('checkbox')}>Add Checkbox</button>
        <button onClick={() => handleAddInput('select')}>Add Select</button>
      </div>
    </div>
  );
};

export default FormBuilder;