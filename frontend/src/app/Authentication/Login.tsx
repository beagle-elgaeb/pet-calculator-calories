import { useFormik } from "formik";
import * as api from "../../api/api";
import Input from "../../components/Input";
import { AuthenticationProps } from "../../utils/types";
import { authorizationValidationSchema } from "../../utils/validation";
import {
  AuthenticationContainer,
  Button,
  Form,
  Linlk,
  Text,
} from "./Authentication.styles";

function Login({ loadProfile }: AuthenticationProps) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authorizationValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await api.authorization({
          email: values.email,
          password: values.password,
        });

        localStorage.setItem("auth", "1");

        await loadProfile();
      } catch (error) {
        console.log(error);
      }

      resetForm();
    },
  });

  const { email, password } = formik.values;

  return (
    <AuthenticationContainer>
      {/* <Title>Авторизация</Title> */}
      <Form onSubmit={formik.handleSubmit}>
        <Input
          formik={formik}
          value={email}
          name="email"
          placeholder="E-mail"
          handleChange={formik.handleChange}
        />
        <Input
          formik={formik}
          value={password}
          name="password"
          placeholder="Пароль"
          handleChange={formik.handleChange}
        />
        <Button type="submit" aria-label="Войти" disabled={!formik.isValid}>
          Войти
        </Button>
      </Form>
      <Text>
        Не зарегистрированы? <Linlk to="/signup">Регистрация</Linlk>
      </Text>
    </AuthenticationContainer>
  );
}

export default Login;
