import React from 'react';

const Playback = ({ data }) => (
  <iframe
    class='grid-element playback'
    width='800'
    height='450'
    src={`https://www.youtube.com/embed/${data}`}
    title='VideoEmbed'
    frameBorder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
  ></iframe>
);

export default Playback;
