import { Outlet } from "react-router-dom";
import { AppLayoutProps } from "../utils/types";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ handleMenuClick, menuPopupOpen }: AppLayoutProps) {
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
