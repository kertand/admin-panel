import React from 'react';
import UserEditForm from '../../components/UserEditForm/UserEditForm';

export default ({
  match: { params: { id } },
}) => (
  <UserEditForm id={id} />
);