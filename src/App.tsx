import "./assets/scss/style.scss";
import { AppState } from "./reducers/rootReducer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./views/auth/Login";
import ForgotPassword from "./views/auth/ForgotPassword";
import Register from "./views/auth/Register";
import Container from "./container/Container";
import { useSelector } from "react-redux";

function App() {
  interface IAuth {
    token: IToken;
  }

  interface IToken {
    token: string;
  }

  const { token } = useSelector<AppState, IAuth>((state) => state.auth);

  return (
    <Router>
      <Switch>
        <Route path="/login">{!token ? <Login /> : <Redirect to="/" />}</Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>
        <Route path="/">
          {token ? <Container /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
