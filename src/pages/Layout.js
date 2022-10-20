import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import Notifier from "../components/Notifier";
import { Offline} from "react-detect-offline";

function Layout() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Offline>
        <Notifier
          message="You are currently offline."
          color={"black"}
          bg={"#FF6663"}
        />
      </Offline>
      <Nav />
      <Outlet />
    </>
  );
}

export default Layout;
