import logo from './assets/images/logo.svg';
import bedimage from './assets/images/icon-bed.svg'
import houseimage from './assets/images/icon-house.svg'
import townimage from './assets/images/icon-pin.svg'
import breakfastimage from './assets/images/icon-breakfast-outline.svg'
import messageimage from './assets/images/icon-mail.svg'
import { Route, Link, BrowserRouter, Routes, NavLink } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
            <div>
                <img src={logo}></img>
            </div>
            <div>
                <li>
                    <ul>
                        <Link to="/">
                          <img src={bedimage}></img>
                          <p>Your stay</p>
                        </Link>
                    </ul>
                    <ul>
                      <Link to="/">
                      
                      </Link>
                        <img src={houseimage}></img>
                        <p>The house</p>
                    </ul>
                    <ul>
                      <Link to="/">
                        <img src={townimage}></img>
                        <p>Aroung town</p>
                      </Link>
                        
                    </ul>
                    <ul>
                      <Link to="/">
                        <img src={breakfastimage}></img>
                        <p>Breafast</p>
                      </Link>
                        
                    </ul>
                    <ul>
                      <Link to="/">
                        <img src={messageimage}></img>
                        <p>Messages</p>
                      </Link>
                        
                    </ul>
                </li>
            </div>
        </nav>

        <Routes>
          <Route path="/" element={""}/>
          <Route path="/" element={""}/>
          <Route path="/" element={""}/>
          <Route path="/" element={""}/>
          <Route path="/" element={""}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
