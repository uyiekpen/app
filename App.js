import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import one from "./Portfolio/one";
import Portfolio from './Portfolio/Portfolio';
import Two from "./Portfolio/Two";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Portfolio} />
          <Route path="/one" exact component={one} />
          <Route path="/Two" exact component={Two} />


        </Switch>
      </BrowserRouter>
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;
