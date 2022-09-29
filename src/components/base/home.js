import React from 'react';

const Home = ({ data, onClick }) => {
  return (
    <div class='home-videos'>
      {data.map((video) => (
        <div class='home' key={video.videoName} onClick={onClick}>
          <img class='home-thumbnail' name={video.videoName} src={video.videoThumbnail} alt='' />
          <div class='home-info'>
            <img
              class='home-avatar'
              alt=''
              src={video.channelThumbnail}
            />
            <div class='home-text'>
              <h4>{video.videoName}</h4>
              <p class='home-channel'>{video.channelName}</p>
              <p class='home-views'>Views: {video.views}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;