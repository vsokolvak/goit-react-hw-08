import AppBar from "./components/AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import NotFoundPages from "./pages/NotFoundPages/NotFoundPages";
import Home from "./pages/Home/Home";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { isRefreshingUser } from "./redux/auth/selectors";
import RestrictedRout from "./components/RestrictedRout/RestrictedRout";
import PrivateRout from './components/PrivateRout/PrivateRout';

function App() {
  const dispatch = useDispatch();
  const refresherUser = useSelector(isRefreshingUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {refresherUser ? (
        <div>Refreshing user, please wait....</div>
      ) : (
        <>
          <AppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRout
                  component={<ContactsPage />}
                  redirectTo={"/login"}
                />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRout
                  component={<RegistrationPage />}
                  redirectTo={"/contacts"}
                />
              }
            />

            <Route
              path="/login"
              element={
                <RestrictedRout
                  component={<LoginPage />}
                  redirectTo={"/contacts"}
                />
              }
            />

            <Route path="*" element={<NotFoundPages />}></Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
