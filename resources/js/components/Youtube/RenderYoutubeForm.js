import React from 'react';

const RenderYoutubeForm = ({ handleChange, handleSubmit, form }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={form.category}
          />
        </div>
        <div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={form.title}
          />
        </div>
        <div>
          <input
            type="text"
            name="url"
            onChange={handleChange}
            value={form.url}
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            name="description"
            onChange={handleChange}
            value={form.description}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default RenderYoutubeForm;
