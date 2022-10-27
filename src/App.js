import React, {createContext, useState} from 'react';
import './App.css';
import './components/styles/Filter.css';
import './components/styles/CardList.css';
import './components/styles/HouseCard.css';
import { CardList } from './components/CardList';
import { Filter } from './components/Filter';

var currentData = [];
export const KeyWordContext = createContext();

function App() {
  const [keyWord, setKeyWord] = useState('');

  return (
    <div className="App">
        <Filter keyWord={keyWord} onKeyWordChange={setKeyWord} />
        <KeyWordContext.Provider value={{keyWord, setKeyWord}}>
          <CardList keyWord={keyWord} />
        </KeyWordContext.Provider>
      </div>
  );
}

export default App;
