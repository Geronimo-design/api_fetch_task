/** @format */

// Importing modules to be used in the component
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Button from '../Button/Button';
import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { InputLabel } from '@mui/material';
import { FormControl } from '@mui/material';
import { useState } from 'react';
import '../Search/Search.css';

// The Search component allows a user to search for data from the iTunes interface by entering the name of the artist and the work created by them
const Search = () => {
  // --- State variables ---
  // Toggles user help
  const [showHelp, setShowHelp] = useState(false);
  // Sets the name of the artist in the artist name field
  const [artistName, setArtistName] = useState('');
  // Sets the work of the artist in the artist work field
  const [artistWork, setArtistWork] = useState('');
  // Sets the data to display that is retrieved from the iTunes endpoint
  const [displayData, setDisplayData] = useState([]);
  // Sets the user's favourite results
  const [favourites, setFavourites] = useState([]);
  // ------------------------

  // Toggles user help when the question mark icon is clicked
  const handleShowHelp = () => {
    setShowHelp(!showHelp);
  };

  // Changes user input when they enter values in the artist name and artist work input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'artistName') {
      setArtistName(value);
    } else if (name === 'artistWork') {
      setArtistWork(value);
    }
  };

  // Saves the results the user deems as favourites to an array stored in session storage to be referenced later
  sessionStorage.setItem('favourites', JSON.stringify(favourites));

  // This function is passed as a callback into the onClick event handler for the 'Favourite' button under each search result. It adds that result to the favourites array in session storage
  const handleFavourite = (dataPoint) => {
    setFavourites([...favourites, dataPoint]);
  };

  // This function is passed as a callback into the onClick event handler for the 'Search' button next to the search fields. It sends the search query as an object to the backend server
  const submitRequestData = async () => {
    const requestData = { artistName: artistName, artistWork: artistWork };
    const url = `http://localhost:8080/`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    });
    const responseData = await response.json();

    setDisplayData(responseData);
  };

  // This array stores all the possible search queries for the artist works field
  const entityValues = [
    'movie',
    'podcast',
    'music',
    'audiobook',
    'shortFilm',
    'tvShow',
    'software',
    'ebook',
    'all',
  ];

  // The JSX to be returned by the component
  return (
    <div data-testid='Search test'>
      {/**Ensuring the NavBar component remains stuck to the top of the page */}
      <NavBar />
      {/** A question mark icon that displays help when clicked */}
      <svg
        onClick={handleShowHelp}
        className='helpIcon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width={32}
        height={32}
        color={'#000000'}
        fill={'none'}>
        <circle
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='1.5'
        />
        <path
          d='M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
        />
        <path
          d='M11.992 17H12.001'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      {/** the help to be displayed when the icon is clicked */}
      <div className='instructions'>
        {showHelp && (
          <p>
            In the search panel below, enter the name of the musical artist you
            are searching for in the "Artist name" field. Enter the work created
            by them in the "Artist work" field, then click on "Find".
          </p>
        )}
      </div>
      {/** Making use of MUI components and built-in components to create two search fields and a clickable button that will return search results when interacted with */}
      <div className='searchPanel'>
        <FormControl className='entitySelect'>
          <InputLabel>Artist work</InputLabel>
          <Select
            className='searchPanelItem'
            variant='filled'
            label='Artist work'
            name='artistWork'
            value={artistWork}
            onChange={handleInputChange}>
            {entityValues.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className='termSelect'
          variant='filled'
          label='Artist name'
          name='artistName'
          value={artistName}
          onChange={handleInputChange}
        />

        <Button
          text='Search'
          className='submitButton'
          onClick={submitRequestData}
        />
      </div>

      {/** Logic for handling the display of results that are returned. Displays all results on the page in a scrollable format */}

      <div className='dataDisplayCardContainer'>
        {displayData.map((dataPoint, index) => (
          <main key={index} className='dataDisplayCard'>
            {Object.entries(dataPoint).map(([key, value]) =>
              key.includes('Url') ? (
                <div key={key} className='dataPoint'>
                  <strong>{key}: </strong> <a href={value}>{value}</a>
                </div>
              ) : (
                <div key={key} className='dataPoint'>
                  <strong>{key}: </strong> {value}
                </div>
              )
            )}
            <Button
              text='Favourite'
              onClick={() => handleFavourite(dataPoint)}
            />
          </main>
        ))}
      </div>
    </div>
  );
};

export default Search;
