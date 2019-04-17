import React from 'react';
import { Input, InputNumber } from "@jbuschke/formik-antd";
import { Formik } from 'formik';

export default ({
  value = {
    name: 'John',
    phone: '617-371-2967',
    age: 26,
    email: 'Rene89@gmail.com',
    username: 'Rene89',
  },
}) => (
  <Formik initialValues={value}>
    <React.Fragment>
      <Input name='name'/>
      <Input name='phone'/>
      <InputNumber name='age'/>
      <Input name='email'/>
      <Input name='username'/>
    </React.Fragment>
  </Formik>
);