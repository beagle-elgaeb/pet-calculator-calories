import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled/macro";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadStateMeals } from "../redux/mealSlise";
import { loadStateProfile } from "../redux/profileSlise";
import { State } from "../redux/types";
import { purple } from "../styles/colors";
import { Container } from "../styles/patterns";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import MenuPopup from "./MenuPopup";
import Profile from "./Profile";

function App() {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();

  const [menuPopupOpen, setMenuPopupOpen] = useState(false);

  function closeAllPopups() {
    setMenuPopupOpen(false);
  }

  function handleMenuClick() {
    setMenuPopupOpen(true);
  }

  function onKeydown({ key }: KeyboardEvent) {
    if (key === "Escape") {
      closeAllPopups();
    }
  }

  const localStorageKey = "state";

  // Загрузка данных из локального хранилища в стейт
  useEffect(() => {
    const savedStateMeals = localStorage.getItem(localStorageKey);
    const savedStateProfile = localStorage.getItem(localStorageKey);

    if (savedStateMeals) {
      try {
        dispatch(loadStateMeals(JSON.parse(savedStateMeals).meals));
      } catch {}
    }

    if (savedStateProfile) {
      try {
        dispatch(loadStateProfile(JSON.parse(savedStateProfile).profile));
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Загрузка данных из стейта в локальное хранилище
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);

  return (
    <AppContainer scrollInactive={menuPopupOpen}>
      <Header onMenuClick={handleMenuClick} popupOpened={menuPopupOpen} />
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
      <MenuPopup
        isOpen={menuPopupOpen}
        onClose={closeAllPopups}
        onKeydown={onKeydown}
      />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div<{ scrollInactive: boolean }>`
  ${Container};

  ${({ scrollInactive }) => (scrollInactive ? `height: 100vh;` : "")}
  ${({ scrollInactive }) => (scrollInactive ? `overflow-y: hidden;` : "")}

  max-width: 500px;
  min-width: 320px;
  position: relative;
  text-align: center;
  color: ${purple};
  margin: 0 auto;
  padding: 0 10px 20px;
`;
