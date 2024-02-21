import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      {/* İç içe geçmiş Route ları burada göstermek için */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
