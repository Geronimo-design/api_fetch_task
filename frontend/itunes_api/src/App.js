/** @format */

// Importing modules to be used in the component
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Favourites from './components/Favourites/Favourites';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Made the App component modular by using routes to different components
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Search' Component={Search} />
          <Route path='/Favourites' Component={Favourites} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
