import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator/Calculator";
import MenuPopup from "./Menu/MenuPopup";
import Profile from "./Profile/Profile";
import { useLoadFromStorage } from "../utils/localStorage";
import { AppContainer } from "./App.styles";
import Footer from "./Footer";
import Header from "./Header";

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
      <Header onMenuClick={handleMenuClick} popupOpened={menuPopupOpen} />
      <Routes>
        <Route path="/">
          <Route index element={<Calculator />} />
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
