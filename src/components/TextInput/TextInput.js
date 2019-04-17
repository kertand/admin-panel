import React from 'react';
import { Formik } from 'formik';
import TextInput from '../TextInput/TextInput';

const validate = ({ name }) => {
  if (!name) return { name: 'Required' };
};

export default ({
  value = {
    name: 'John',
    phone: '617-371-2967',
    age: 26,
    email: 'Rene89@gmail.com',
    username: 'Rene89',
  },
  handleSubmit = () => {},
}) => (
  <Formik
    initialValues={value}
    onSubmit={handleSubmit}
    validate={validate}
    render={form => (
      <React.Fragment>
        <TextInput name='name' {...form} />
        <TextInput name='phone' {...form} />
        <TextInput name='age' {...form} />
        <TextInput name='email' {...form} />
        <TextInput name='username' {...form} />
      </React.Fragment>
    )}
  >
    
  </Formik>
);