import React, { useState, memo } from "react";
import FormSign from "../FormSign/FormSign";

const Login = memo(({ changeCurrUrl, authRegister }) => {
  return <FormSign name="sign-in" title="Рады видеть!" btnName="Войти" />;
});

export default Login;
