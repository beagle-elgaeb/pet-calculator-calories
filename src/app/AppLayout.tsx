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
      <div>
        <Header onMenuClick={handleMenuClick} popupOpened={menuPopupOpen} />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
