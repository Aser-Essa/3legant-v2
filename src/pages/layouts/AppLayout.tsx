import { Outlet } from "react-router";
import Footer from "../../shared/ui/Footer";
import Header from "../../shared/ui/Header";
import TopBar from "../../shared/ui/TopBar";

function AppLayout() {
  return (
    <>
      <div className="h-25">
        <div className="xxx fixed top-0 z-9998 w-full">
          <TopBar />
          <Header />
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
