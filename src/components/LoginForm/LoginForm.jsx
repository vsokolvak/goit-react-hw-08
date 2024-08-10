import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./LoginForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const RegisteredShema = Yup.object().shape({
  email: Yup.string().email().required("this field is required"),
  password: Yup.string()
    .min(4, "you pas must have min 4 symbols")
    .required("this field is required"),
});

function LoginForm() {
  const id = nanoid();

  const dispatch = useDispatch();

  const onSubmitForm = (data, { resetForm }) => {
    dispatch(login(data))
    resetForm();
  };
  return (
    <>
      <Formik
        onSubmit={onSubmitForm}
        initialValues={{
          email: "userkurvomail@gmail.com",
          password: "333greenPotato",
        }}
        validationSchema={RegisteredShema}
      >
        <Form className={style.wrapper}>
          <label htmlFor={`email${id}`} className={style.label}>
            Email
          </label>
          <span className={style.errorMessage}>
            <ErrorMessage name="email" />
          </span>
          <Field
            type="email"
            id={`email${id}`}
            name="email"
            className={style.field}
          />

          <label htmlFor={`password${id}`} className={style.label}>
            Password
          </label>
          <span className={style.errorMessage}>
            <ErrorMessage name="password" />
          </span>

          <Field
            type="password"
            id={`password${id}`}
            name="password"
            className={style.field}
          />

          <button type="submit" className={style.button}>
            Log in
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default LoginForm;
