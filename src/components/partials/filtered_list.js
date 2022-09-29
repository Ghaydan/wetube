import React from 'react';

const Filtered_list = ({ data, onClick }) => {
  return (
    <div class='list-videos'>
      {data.map((video) => (
        <div class='list' key={video.videoName} onClick={onClick}>
          <ul>
            <li>
              <img class='list-thumbnail' name={video.videoName} src={video.videoThumbnail} alt='' />
              <div class='list-info'>
                <img
                  class='list-avatar'
                  alt=''
                  src={video.channelThumbnail}
                />
                <div class='list-text'>
                  <h4>{video.videoName}</h4>
                  <p class='list-channel'>{video.channelName}</p>
                  <p class='list-views'>Views: {video.views}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Filtered_list;