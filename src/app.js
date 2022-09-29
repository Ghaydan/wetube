import React, { useState, useEffect } from 'react';

import data from './assets/data.json';

import Header from './components/base/layouts/header';
import Footer from './components/base/layouts/footer';
import Home from './components/base/home';
import Playback from './components/partials/playback';
import SearchBar from './components/partials/search_bar';
import FilteredList from './components/partials/filtered_list';
import Sidebar from './components/base/layouts/sidebar';;

const App = () => {
  /* ------------------------ use states ------------------------ */
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [videoId, setVideoId] = useState();

  /* ------------------------ check storage ------------------------ */
  const [viewHomePage, setViewHomePage] = useState(
    () => JSON.parse(localStorage.getItem('home')) ?? true);
  const [viewPlayback, setViewPlayback] = useState(
    () => JSON.parse(localStorage.getItem('play')) ?? false);
  const [viewFilteredList, setViewFilteredList] = useState(
    () => JSON.parse(localStorage.getItem('list')) ?? false);

  /* ------------------------ use effects ------------------------ */
  useEffect(() => {
    setVideos(data);
  }, [])

  useEffect(() => {
    setVideoId(() => JSON.parse(localStorage.getItem('currentIndex')) ?? data[0]);
  }, [videos])

  /* ------------------------ functions ------------------------ */
  if (videos && videoId) {
    const video_id = videoId.videoId.split('?v=')[1]; // extract just the video id from youtube video URL

    // View playback with video selected from thumbnail list
    function getVideoFromThumbnail(event) {
      const searchedVideoName = event.target.text;
      // find index in DB where videoName matches the selected video
      const findVideoIndex = videos.findIndex(
        (v) => v.videoName === `${searchedVideoName}`
      );

      localStorage.setItem('currentIndex', JSON.stringify(data[findVideoIndex]));
      localStorage.setItem('home', JSON.stringify(false));
      localStorage.setItem('play', JSON.stringify(true));
      localStorage.setItem('list', JSON.stringify(false));
      setVideoId(data[findVideoIndex]);
      setViewHomePage(false);
      setViewPlayback(true);
      setViewFilteredList(false);
    };

    // View playback with video selected from filtered list
    function getVideoFromFilteredList(event) {
      const searchedVideoName = event.target.name;
      // find index in DB where videoName matches the selected video
      const findVideoIndex = videos.findIndex(
        (v) => v.videoName === `${searchedVideoName}`
      );

      localStorage.setItem('currentIndex', JSON.stringify(data[findVideoIndex]));
      localStorage.setItem('home', JSON.stringify(false));
      localStorage.setItem('play', JSON.stringify(true));
      localStorage.setItem('list', JSON.stringify(false));
      setVideoId(data[findVideoIndex]);
      setViewHomePage(false);
      setViewPlayback(true);
      setViewFilteredList(false);
    };

    // View playback with video selected from search results
    function getVideoFromSearch(event) {
      const searchedVideoName = event.target.name;
      // find index in DB where videoName matches the selected video
      const findVideoIndex = videos.findIndex(
        (v) => v.videoName === `${searchedVideoName}`
      );

      localStorage.setItem('currentIndex', JSON.stringify(data[findVideoIndex]));
      localStorage.setItem('home', JSON.stringify(false));
      localStorage.setItem('play', JSON.stringify(true));
      localStorage.setItem('list', JSON.stringify(false));
      setVideoId(data[findVideoIndex]);
      setViewHomePage(false);
      setViewPlayback(true);
      setViewFilteredList(false);
    };

    // View filtered video list based on search words
    function getFilteredView() {
      localStorage.setItem('home', JSON.stringify(false));
      localStorage.setItem('play', JSON.stringify(false));
      localStorage.setItem('list', JSON.stringify(true));
      setViewHomePage(false);
      setViewPlayback(false);
      setViewFilteredList(true);
    }

    // View home page with video thumbnail list
    function showHomePage() {
      localStorage.setItem('home', JSON.stringify(true));
      localStorage.setItem('play', JSON.stringify(false));
      localStorage.setItem('list', JSON.stringify(false));
      setViewHomePage(true);
      setViewPlayback(false);
      setViewFilteredList(false);
    };

    // filter videos based on search words
    function getFilteredList(event) {
      setFilteredVideos(event);
    };

    /* ------------------------ app render ------------------------ */
    return (
      <div class='App'>
        <div class='header grid-element'><Header /></div>
        <div class='wrapper'>
          <Sidebar class='grid-element' onClick={showHomePage} />
          <div class='main grid-element'>
            <SearchBar data={videos} placeholder='Enter a video name' onClick={getVideoFromThumbnail} onSearch={getFilteredList} getFilteredView={getFilteredView} />
            {viewHomePage ? (
              <Home data={videos} onClick={getVideoFromSearch} />
            ) : null}
            {viewPlayback ? (
              <Playback data={video_id} />
            ) : null}
            {viewFilteredList ? (
              <FilteredList data={filteredVideos} onClick={getVideoFromFilteredList} />
            ) : null}
          </div>
        </div>
        <div class='grid-element footer'><Footer /></div>
      </div>
    )
  };
};

export default App;