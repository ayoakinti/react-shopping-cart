import "../../assets/scss/settingsnavbar.scss";
import { NavLink } from "react-router-dom";

function SettingsNavBar() {
    return (
        <div className="col-lg-12">
        <div className="row settings-nav">
          <NavLink to="editprofile" className="settings-navlink col-xs-12 col-md-3 col-lg-2">
            Edit Profile
          </NavLink>
          <NavLink to="changepassword" className="settings-navlink col-xs-12 col-md-4 col-lg-3">
            Change Password
          </NavLink>
        </div>
      </div>
    );
  }
  
  export default SettingsNavBar;
  