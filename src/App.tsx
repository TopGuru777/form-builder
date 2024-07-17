import React from 'react';
import { FormProvider } from './context/FormContext';
import FormBuilder from './components/FormBuilder';
import FormDataDisplay from './components/FormDataDisplay';

const App: React.FC = () => {
  return (
    <FormProvider>
      <div className="App">
        <h1>Dynamic Form Builder</h1>
        <FormBuilder />
        <hr />
        <h2>Form Output</h2>
        <FormDataDisplay />
      </div>
    </FormProvider>
  );
};

export default App;