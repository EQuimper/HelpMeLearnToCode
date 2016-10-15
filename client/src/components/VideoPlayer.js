import React from 'react';

export const VideoPlayer = ({ height, width, src }) => (
  <iframe
    src={src}
    frameBorder="0"
    allowFullScreen
    height={height}
    width={width}
  />
);
