import React, { useState } from 'react';
import { MdOutlineClear, MdOutlineSearch } from 'react-icons/md';

const Search_bar = ({ data, placeholder, onClick, onSearch, getFilteredView }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  function handleFilter(event) {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.videoName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  function clearInput() {
    setFilteredData([]);
    setWordEntered('');
  };

  function handleOnSearch() {
    clearInput();
    getFilteredView();
  }

  return (
    <div class='search'>
      <div class='searchInputs'>
        <input type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div class='searchIcon'>
          {filteredData.length ? (
            <div>
              <MdOutlineSearch type='button' id='searchButton' onChange={onSearch(filteredData)} onClick={handleOnSearch} />
              <MdOutlineClear id='closeButton' onClick={clearInput} />
            </div>
          ) : null}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div class='dataResult'>
          {/* Only show 10 results at once */}
          {filteredData.slice(0, 10).map((value) => {
            return (
              <a class='dataItem' key={value.videoName} onClick={onClick} href='/#'>
                {value.videoName}
              </a>
            );
          })}
        </div>
      )}
    </div >
  )
};

export default Search_bar;