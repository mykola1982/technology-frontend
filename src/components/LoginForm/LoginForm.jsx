import { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { logIn } from "../../redux/auth/authOperation";

const validationSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
});

const idInputLogin = nanoid();
const idInputPassword = nanoid();

const initialValues = {
  name: "",
  password: "",
};

export const LoginForm = () => {
  const [typeInputPassword, setTypeInputPassword] = useState("password");

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(logIn(values));
    } catch (error) {}
    resetForm();
  };

  const showPassword = () => {
    if (typeInputPassword === "password") {
      setTypeInputPassword("text");
    } else if (typeInputPassword === "text") {
      setTypeInputPassword("password");
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor={idInputLogin}> Логін</label>
          <Field
            id={idInputLogin}
            type="text"
            name="name"
            placeholder="Веддіть логін"
          />

          <ErrorMessage name="name" component="p" />
          <label htmlFor={idInputPassword}>Пароль</label>
          <Field
            id={idInputPassword}
            type={typeInputPassword}
            name="password"
            placeholder="Введіть пароль"
          />
          <button type="button" onClick={showPassword}>
            {typeInputPassword === "password"
              ? "Показати пароль"
              : "Приховати пароль"}
          </button>
          <ErrorMessage name="password" component="p" />

          <button type="submit"> Увійти </button>
        </Form>
      </Formik>
    </>
  );
};
