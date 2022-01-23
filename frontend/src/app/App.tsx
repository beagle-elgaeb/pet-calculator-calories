import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import * as api from "../api/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { MealItem } from "../redux/types";
import { UserType } from "../utils/types";
import AboutProject from "./AboutProject/AboutProject";
import { AppContainer } from "./App.styles";
import Layout from "./AppLayout";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Calculator from "./Calculator/Calculator";
import MealPopup from "./Meal/MealPopup";
import MenuPopup from "./Menu/MenuPopup";
import NotFoundPage from "./NotFoundPage";
import Profile from "./Profile/Profile";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  async function loadProfile() {
    try {
      const user = await api.getProfileData();

      setCurrentUser(user);
      closeAllPopups();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (!auth) {
      return;
    }

    loadProfile();
  }, []);

  async function handleLogout() {
    await api.logout();

    localStorage.removeItem("auth");

    setCurrentUser(undefined);
  }

  const [menuPopupOpen, setMenuPopupOpen] = useState(false);
  const [mealPopupOpen, setMealPopupOpen] = useState(false);
  const [mealPopupData, setMealPopupData] = useState<MealItem>();

  function closeAllPopups() {
    setMenuPopupOpen(false);
    setMealPopupOpen(false);
  }

  function onKeydownEsc({ key }: KeyboardEvent) {
    if (key === "Escape") {
      closeAllPopups();
    }
  }

  function handleMenuClick() {
    setMenuPopupOpen(true);
  }

  function handleMealClick(data: MealItem) {
    setMealPopupOpen(true);
    setMealPopupData(data);
  }

  useEffect(() => {
    menuPopupOpen || mealPopupOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [menuPopupOpen, mealPopupOpen]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppContainer>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                handleMenuClick={handleMenuClick}
                menuPopupOpen={menuPopupOpen}
              />
            }
          >
            <Route element={<AppAuth currentUser={currentUser} />}>
              <Route
                index
                element={<Calculator handleMealClick={handleMealClick} />}
              />
              <Route
                path="profile"
                element={<Profile loadProfile={loadProfile} />}
              />
              <Route path="about-project" element={<AboutProject />} />
            </Route>
            <Route element={<AppNotAuth currentUser={currentUser} />}>
              <Route
                path="signup"
                element={<Register loadProfile={loadProfile} />}
              />
              <Route
                path="signin"
                element={<Login loadProfile={loadProfile} />}
              />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <MenuPopup
          isOpen={menuPopupOpen}
          onClose={closeAllPopups}
          onKeydown={onKeydownEsc}
          onLogout={handleLogout}
        />

        <MealPopup
          data={mealPopupData}
          isOpen={mealPopupOpen}
          onClose={closeAllPopups}
          onKeydown={onKeydownEsc}
        />
      </AppContainer>
    </CurrentUserContext.Provider>
  );
}

export default App;

function AppAuth({ currentUser }: { currentUser: UserType | undefined }) {
  const auth = localStorage.getItem("auth");

  return currentUser ? <Outlet /> : auth ? null : <Navigate to="/signin" />;
}

function AppNotAuth({ currentUser }: { currentUser: UserType | undefined }) {
  return currentUser ? <Navigate to="/" /> : <Outlet />;
}
