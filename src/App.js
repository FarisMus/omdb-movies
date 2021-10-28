import React from 'react';

import './App.css';
import SearchInput from './Components/SearchInput/SearchInput.component';
import MovieList from './Components/MovieList/MovieList.component';

function App() {
  return (
    <div className="App">
      <SearchInput />
      <MovieList />
    </div>
  );
}

export default App;
