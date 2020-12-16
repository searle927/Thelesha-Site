import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
// import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
// import Home from './Components/Home/Home';
// import OurImpact from './Components/OurImpact/OurImpact';
// import VirtualOffice from './Components/VirtualOffice/VirtualOffice';
// import VlogBlog from './Components/VlogBlog/VlogBlog';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        {/* <Switch>
          <Route path="/" exact component={HomePage} />
          <Route exact path="/whatWeDo" component={WhatWeDo} />
          <Route exact path="/ourImpact" component={OurImpact} />
          <Route exact path="/virtualOffice" component={VirtualOffice} />
          <Route exact path="/vlogBlog" component={VlogBlog} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
