import { useFormik } from "formik";
import Input from "../../components/Input";
import { registerValidationSchema } from "../../utils/validation";
import { AuthContainer, LinlkToRegister, Title, Text } from "./Auth.styles";
import { Form } from "./Register.styles";

function Auth() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: () => {},
  });

  const { name, email, password } = formik.values;

  return (
    <AuthContainer>
      <Title>Авторизация</Title>
      <Form>
        <Input
          formik={formik}
          value={name}
          name="name"
          placeholder="Имя"
          handleChange={formik.handleChange}
        />
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
      </Form>
      <Text>
        Не зарегистрированы?{" "}
        <LinlkToRegister to="/signup">Регистрация</LinlkToRegister>
      </Text>
    </AuthContainer>
  );
}

export default Auth;
