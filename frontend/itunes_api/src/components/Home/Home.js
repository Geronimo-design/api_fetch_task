/** @format */

// Importing modules to be used in the component
import NavBar from '../NavBar/NavBar';
import './Home.css';

// Displays a background with a welcome message
const Home = () => {
  return (
    <div data-testid='Home test'>
      <NavBar />
      <div className='topDiv'>
        <p>Welcome to the iTunes API interface.</p>
        <p>
          Here, you can search for works created by your favourite musical
          artists and save the ones that you like the most.
        </p>
      </div>
    </div>
  );
};

export default Home;
