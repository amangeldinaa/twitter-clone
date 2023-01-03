import './App.css';
import Home from './components/HomeComponent';
import SideMenu from './components/SideMenuComponent';

function App() {
  return (     //mx-5 -> 5rem 
    <div className="App d-flex mx-5">  
     <SideMenu/>
     <div className="vertical-divider"></div>
     <Home/>
     <div className="vertical-divider"></div>
    </div>
  );
}

export default App;
