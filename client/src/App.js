

import Header from './components/Header';
import Home from './components/home/Home';
import View from './components/post/View';
import { BrowserRouter, Switch,Route } from "react-router-dom";
import Createblog from './components/post/Createblog';
import Updateblog from './components/post/Update';
import About from './components/about/about';
function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <div style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path = "/" component ={Home} />
          <Route exact path = "/about" component ={About} />
          
          <Route exact path = "/view/:id" component ={View} />
          <Route exact path = "/create" component ={Createblog} />
          <Route exact path = "/update/:id" component ={Updateblog} />
          
        </Switch>

      </div>


    </BrowserRouter>
  );
}

export default App;
