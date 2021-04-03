import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import SettingsNavBar from "./SettingsNavBar";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";
  

function Settings() {
  return (
    <div className="page-wrapper">
      <Router>
        <div className="container-fluid">
          <div className="main-content">
            <SettingsNavBar />
            <Switch>
              <Redirect exact from="/settings" to="/settings/editprofile" />
              <Route path="/settings/editprofile">
                <EditProfile />
              </Route>
              <Route path="/settings/changepassword">
                <ChangePassword />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Settings;
