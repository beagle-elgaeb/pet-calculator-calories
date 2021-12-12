import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout({
  handleMenuClick,
  menuPopupOpen,
}: {
  handleMenuClick: () => void;
  menuPopupOpen: boolean;
}) {
  return (
    <>
      <Header onMenuClick={handleMenuClick} popupOpened={menuPopupOpen} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
