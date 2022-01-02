import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MealItem } from "../redux/types";
import { useLoadFromStorage } from "../utils/localStorage";
import AboutProject from "./AboutProject/AboutProject";
import { AppContainer } from "./App.styles";
import Layout from "./AppLayout";
import Calculator from "./Calculator/Calculator";
import MealPopup from "./Meal/MealPopup";
import MenuPopup from "./Menu/MenuPopup";
import NotFoundPage from "./NotFoundPage";
import Profile from "./Profile/Profile";

function App() {
  useLoadFromStorage();

  const [menuPopupOpen, setMenuPopupOpen] = useState(false);
  const [mealPopupOpen, setMealPopupOpen] = useState(false);
  const [mealPopupData, setMealPopupData] = useState<MealItem>();

  function closeAllPopups() {
    setMenuPopupOpen(false);
    setMealPopupOpen(false);
  }

  function handleMenuClick() {
    setMenuPopupOpen(true);
  }

  function handleMealClick(data: MealItem) {
    setMealPopupOpen(true);
    setMealPopupData(data);
  }

  function onKeydown({ key }: KeyboardEvent) {
    if (key === "Escape") {
      closeAllPopups();
    }
  }

  useEffect(() => {
    menuPopupOpen || mealPopupOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [menuPopupOpen, mealPopupOpen]);

  return (
    <AppContainer>
      <Routes>
        <Route
          element={
            <Layout
              handleMenuClick={handleMenuClick}
              menuPopupOpen={menuPopupOpen}
            />
          }
        >
          <Route path="/">
            <Route
              index
              element={<Calculator handleMealClick={handleMealClick} />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="about-project" element={<AboutProject />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <MenuPopup
        isOpen={menuPopupOpen}
        onClose={closeAllPopups}
        onKeydown={onKeydown}
      />
      <MealPopup
        data={mealPopupData}
        isOpen={mealPopupOpen}
        onClose={closeAllPopups}
        onKeydown={onKeydown}
      />
    </AppContainer>
  );
}

export default App;
