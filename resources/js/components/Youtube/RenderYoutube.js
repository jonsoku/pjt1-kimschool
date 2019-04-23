import React from 'react';

const RenderYoutube = ({ youtube, handleLinkEdit }) => {
  return (
    <div>
      <div>{console.log(youtube)}</div>
      <div>
        <h6>ID</h6>
        {youtube.id}
      </div>
      <div>
        <h6>TITLE</h6>
        {youtube.title}
      </div>
      <div>
        <h6>URL</h6>
        {youtube.url}
      </div>
      <div>
        <h6>DESCIPTION</h6>
        {youtube.description}
      </div>
      <div>
        <h6>USER</h6>
        {youtube.user && youtube.user.name}
      </div>
      <div>
        <h6>CATEGORY</h6>
        {youtube.category}
        {youtube.categories &&
          youtube.categories.map(category => (
            <div key={category.id}>{category.name}</div>
          ))}
      </div>
      <div>
        <button onClick={() => handleLinkEdit(youtube.id)}>edit</button>
      </div>
    </div>
  );
};

export default RenderYoutube;
