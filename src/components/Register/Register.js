import React, { memo, useState } from "react";
import FormSign from "../FormSign/FormSign";

const Register = memo(({ authRegister }) => {
  function handleSubmit(e, { name, email, password }) {
    e.preventDefault();
    authRegister(name, email, password);
  }

  return (
    <FormSign
      name="sign-up"
      title="Добро пожаловать!"
      btnName="Зарегистрироваться"
      onSubmit={handleSubmit}
    />
  );
});

export default Register;
