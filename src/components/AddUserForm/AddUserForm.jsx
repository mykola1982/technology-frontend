import { useDispatch } from "react-redux";
import * as yup from "yup";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";

import { register } from "../../redux/auth/authOperation";

const validationSchema = yup.object().shape({
  name: yup.string().required("This field is required"),
  password: yup
    .string()
    .min(8, "Пароль повинен мати не менше 8 символів")
    .required("This field is required"),
  role: yup
    .string()
    .oneOf(["ADMIN", "USER"])
    .required("This field is required"),
});

const idInputName = nanoid();
const idInputPassword = nanoid();
const idInputRole = nanoid();

const initialValues = {
  name: "",
  password: "",
  role: "USER",
};

export const AddUserForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values));
    } catch (error) {}

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={idInputName}>Логін</label>
        <Field
          id={idInputName}
          type="text"
          name="name"
          placeholder="Введіть ім'я"
        />
        <ErrorMessage name="name" component="p" />
        <label htmlFor={idInputPassword}>Пароль</label>
        <Field
          id={idInputPassword}
          type="password"
          name="password"
          placeholder="Введіть пароль"
        />
        <ErrorMessage name="password" component="p" />
        <div id={idInputRole}> Права користувача</div>,
        <div role="group" aria-labelledby={idInputRole}>
          <label>
            <Field type="radio" name="role" value="ADMIN" />
            Адміністратор
          </label>
          <label>
            <Field type="radio" name="role" value="USER" />
            Користувач
          </label>
          <ErrorMessage name="role" component="p" />
        </div>
        <button type="submit"> Створити користувача</button>
      </Form>
    </Formik>
  );
};
