import { useFormik } from "formik";
import Input from "../../components/Input";
import { registerValidationSchema } from "../../utils/validation";
import {
  Form,
  LinlkToAuth,
  RegisterContainer,
  Title,
  Text,
} from "./Register.styles";

function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: () => {},
  });

  const { name, email, password, repeatPassword } = formik.values;

  return (
    <RegisterContainer>
      <Title>Регистрация</Title>
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
          type="password"
          placeholder="Пароль"
          handleChange={formik.handleChange}
        />
        <Input
          formik={formik}
          value={repeatPassword}
          name="repeatPassword"
          type="password"
          placeholder="Подтверждение пароля"
          handleChange={formik.handleChange}
        />
      </Form>
      <Text>
        Уже зарегистрированы? <LinlkToAuth to="/signin">Вход</LinlkToAuth>
      </Text>
    </RegisterContainer>
  );
}

export default Register;
