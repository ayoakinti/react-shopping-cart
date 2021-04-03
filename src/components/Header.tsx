import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ openSideMenuContainer }: any) {

  const openSideMenu = () => {
    openSideMenuContainer();
  };

  return (
    <header className="topbar">
      <div className="d-flex align-items-center">
        <FontAwesomeIcon
          onClick={openSideMenu}
          className="menu-icon mr-2"
          icon={faBars}
        />
        Header
      </div>
    </header>
  );
}

export default Header;
