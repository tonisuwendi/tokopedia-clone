import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
