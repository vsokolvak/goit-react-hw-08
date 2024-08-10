import LoginForm from "../../components/LoginForm/LoginForm";
import style from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Log in</h3>
      <LoginForm />
    </div>
  );
}

export default LoginPage;