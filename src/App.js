import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavBar from './Components/NavBar/NavBar'; 
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import Residential from './Components/Residential/Residential';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import AirQuality from './Components/Services/AirQuality/AirQuality';
import WaterQuality from './Components/Services/WaterQuality/WaterQuality';
import Bulk from './Components/Services/BulkMaterial/BulkMaterial';
import SpecialApps from './Components/Services/SpecialApps/SpecialApps';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/aq" component={AirQuality} />
          <Route exact path="/wq" component={WaterQuality} />
          <Route exact path="/bulk" component={Bulk} />
          <Route exact path="/sa" component={SpecialApps} />
          <Route exact path="/residential" component={Residential} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
