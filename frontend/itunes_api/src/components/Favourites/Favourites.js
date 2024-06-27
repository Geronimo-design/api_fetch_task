/** @format */

// Importing modules to be used in the component
import NavBar from '../NavBar/NavBar';
import '../Favourites/Favourites.css';
import Button from '../Button/Button';
import { useState } from 'react';

// The Favourites component
const Favourites = () => {
  // Importing favourites from the component's state
  const [favourites, setFavourites] = useState(
    JSON.parse(sessionStorage.getItem('favourites')) || []
  );

  // This function handles the removal of a favourite item if a user decides that it is no longer a favourite of theirs
  const handleUnfavourite = (favouritePoint) => {
    // Filters the item from the favourites array
    const newFavourites = favourites.filter(
      (favourite) => favourite !== favouritePoint
    );
    // Stores the new favourites under the 'favourites' array in session storage
    sessionStorage.setItem('favourites', JSON.stringify(newFavourites));
    // Sets the favourites array to take on the new value of newFavourites
    setFavourites(newFavourites);
  };

  // The JSX that is returned
  return (
    <div data-testid='favourites test'>
      {/**Ensures that the NavBar is returned and stays on top of the page */}
      <NavBar />
      {/** The logic for displaying favourites. The code maps through the favourites array in session storage and displays all of the results in the DOM */}
      <div className='favouritesDisplayCardContainer'>
        {favourites.map((favourite, index) => (
          <main key={index} className='favouriteDisplayCard'>
            {Object.entries(favourite).map(([key, value]) =>
              key.includes('Url') ? (
                <div key={key} className='favouritePoint'>
                  <strong>{key}: </strong> <a href={value}>{value}</a>
                </div>
              ) : (
                <div key={key} className='favouritePoint'>
                  <strong>{key}: </strong> {value}
                </div>
              )
            )}
            <Button
              onClick={() => handleUnfavourite(favourite)}
              text='Unfavourite'
            />
          </main>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
