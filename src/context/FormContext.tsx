import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { FormState, Action } from '../types';

const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case 'ADD_INPUT':
      return { ...state, inputs: [...state.inputs, action.payload] };
    case 'UPDATE_INPUT':
      return {
        ...state,
        inputs: state.inputs.map(input =>
          input.id === action.payload.id ? { ...input, props: { ...input.props, ...action.payload.props} } : input
        ),
      };
    case 'REMOVE_INPUT':
      return {
        ...state,
        inputs: state.inputs.filter(input => input.id !== action.payload.id),
      };
    default:
      throw new Error('Unhandled action type');
  }
};

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, { inputs: [] });

  return <FormContext.Provider value={{ state, dispatch }}>{children}</FormContext.Provider>;
};

export const useForm = (): { state: FormState; dispatch: React.Dispatch<Action> } => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};