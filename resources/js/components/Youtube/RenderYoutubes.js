import React from 'react';
import styled from 'styled-components';

const RenderYoutubes = ({ youtubes, handleCreateLink }) => {
  return (
    <div>
      <button onClick={() => handleCreateLink()}>create</button>
      <div>
        {youtubes.map(youtube => (
          <div key={youtube.id}>{youtube.title}</div>
        ))}
      </div>
    </div>
  );
};

export default RenderYoutubes;
