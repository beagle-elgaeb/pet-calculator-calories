import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MealItem } from "../redux/types";
import { useLoadFromStorage } from "../utils/localStorage";
import AboutProject from "./AboutProject/AboutProject";
import { AppContainer } from "./App.styles";
import Layout from "./AppLayout";
import Auth from "./Authentication/Auth";
import Register from "./Authentication/Register";
import Calculator from "./Calculator/Calculator";
import MealPopup from "./Meal/MealPopup";
import MenuPopup from "./Menu/MenuPopup";
import NotFoundPage from "./NotFoundPage";
import Profile from "./Profile/Profile";

function App() {
  // -----1-----
  useLoadFromStorage();

  const [menuPopupOpen, setMenuPopupOpen] = useState(false); // состояние открытости модального окна меню
  const [mealPopupOpen, setMealPopupOpen] = useState(false); //состояние открытости модального окна приёма пищи
  const [mealPopupData, setMealPopupData] = useState<MealItem>(); // данные приёма пищи

  // -----2.1-----
  function closeAllPopups() {
    setMenuPopupOpen(false);
    setMealPopupOpen(false);
  }

  // -----2.2-----
  function onKeydownEsc({ key }: KeyboardEvent) {
    if (key === "Escape") {
      closeAllPopups();
    }
  }

  // -----3-----
  function handleMenuClick() {
    setMenuPopupOpen(true);
  }

  // -----4-----
  function handleMealClick(data: MealItem) {
    setMealPopupOpen(true);
    setMealPopupData(data);
  }

  // -----5-----
  useEffect(() => {
    menuPopupOpen || mealPopupOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [menuPopupOpen, mealPopupOpen]);

  return (
    <AppContainer>
      <Routes>
        {/* -----6----- */}
        <Route
          element={
            <Layout
              handleMenuClick={handleMenuClick}
              menuPopupOpen={menuPopupOpen}
            />
          }
        >
          <Route path="/">
            {/* -----7----- */}
            <Route
              index
              element={<Calculator handleMealClick={handleMealClick} />}
            />

            {/* -----8----- */}
            <Route path="profile" element={<Profile />} />

            {/* -----9----- */}
            <Route path="about-project" element={<AboutProject />} />

            {/* -----!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!----- */}
            <Route path="signup" element={<Register />} />
            <Route path="signin" element={<Auth />} />
          </Route>
        </Route>

        {/* -----10----- */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* -----11----- */}
      <MenuPopup
        isOpen={menuPopupOpen}
        onClose={closeAllPopups}
        onKeydown={onKeydownEsc}
      />

      {/* -----12----- */}
      <MealPopup
        data={mealPopupData}
        isOpen={mealPopupOpen}
        onClose={closeAllPopups}
        onKeydown={onKeydownEsc}
      />
    </AppContainer>
  );
}

export default App;

// 1.   Загрузка даных из local storage
// 2.1. Ф-я закрывает модальные окна
// 2.2. Ф-я закрывает модальные окна при нажатии клавиши Esc
// 3.   Ф-я открывает модальное окно - меню
// 4.   Ф-я открывает модальное окно - приём пищи
// 5.   Ф-я включает и выключает возможность прокрутки окна при закрытом
//      и открытом модальном окне соответственно
// 6.   Обёртка приложения из header'а и footer'а, принимает ф-ю открытия
//      модального окна меню (3) и состояние открытости модального окна меню
// 7.   Роут страницы "Калькулятор", принимает ф-ю открытия модального окна
//      приёма пищи (4)
// 8.   Роут страницы "Профиль пользователя"
// 9.   Роут страницы "О проекте"
// 10.  Страница открывающася при запросе несуществующей страницы
// 11.  Модальное окно меню, пинимает состояние открытости модального окна
//      меню и ф-ии закрытия модальных окон (2)
// 12.  Модальное окно приёма пищи, пинимает данные приёма пищи, состояние
//      открытости модального окна меню и ф-ии закрытия модальных окон (2)
