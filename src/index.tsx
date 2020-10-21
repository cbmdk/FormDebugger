import { useFormikContext } from 'formik';
import React from 'react';
import { Debugger } from './Debugger';

export const FormDebugger: React.FC = () => {
  const formik = useFormikContext();

  return <Debugger value={formik} />;
};
