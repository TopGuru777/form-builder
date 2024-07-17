export interface InputProps {
  name?: string;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
  value?: string;
  checked?: boolean;
  label?: string;
}

export type InputType = 'text' | 'checkbox' | 'select';

export interface InputConfig {
  id: string;
  type: InputType;
  props: InputProps;
}

export type Action =
  | { type: 'ADD_INPUT'; payload: InputConfig }
  | { type: 'UPDATE_INPUT'; payload: InputConfig }
  | { type: 'REMOVE_INPUT'; payload: { id: string } };

export interface FormState {
  inputs: InputConfig[];
}