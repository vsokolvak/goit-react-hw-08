import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import style from "./RegistrationPage.module.css";

function RegistrationPage() {
  return (
    <>
      <h3 className={style.title}>Register new user</h3>
      <RegistrationForm />
    </>
  );
}

export default RegistrationPage;
