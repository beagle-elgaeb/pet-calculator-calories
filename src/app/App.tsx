import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useLoadFromStorage } from "../utils/localStorage";
import AboutProject from "./AboutProject/AboutProject";
import { AppContainer } from "./App.styles";
import Layout from "./AppLayout";
import Calculator from "./Calculator/Calculator";
import MenuPopup from "./Menu/MenuPopup";
import NotFoundPage from "./NotFoundPage";
import Profile from "./Profile/Profile";

function App() {
  useLoadFromStorage();

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

  return (
    <AppContainer scrollInactive={menuPopupOpen}>
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
            <Route index element={<Calculator />} />
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
    </AppContainer>
  );
}

export default App;
