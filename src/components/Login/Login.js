import React, { memo, useState } from 'react';
import FormSign from '../FormSign/FormSign';

const Login = memo(({ authLogin }) => {
  function handleSubmit(e, { email, password }) {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    authLogin(email, password).catch((err) => console.log(err));
  }
  return (
    <FormSign
      name="sign-in"
      title="Рады видеть!"
      btnName="Войти"
      onSubmit={handleSubmit}
    />
  );
});

export default Login;
