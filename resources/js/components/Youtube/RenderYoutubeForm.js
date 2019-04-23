import React from 'react';

const RenderYoutubeForm = ({ handleChange, handleSubmit, form, editMode }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h6>category</h6>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={form.category}
          />
        </div>
        <div>
          <h6>subject</h6>
          <input
            type="checkbox"
            name="subject"
            onChange={handleChange}
            value="1"
          />
        </div>
        <div>
          <h6>title</h6>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={form.title}
          />
        </div>
        <div>
          <h6>url</h6>
          <input
            type="text"
            name="url"
            onChange={handleChange}
            value={form.url}
          />
        </div>
        <div>
          <h6>description</h6>
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
          <button type="submit">{editMode ? 'EDIT' : 'CREATE'}</button>
        </div>
      </form>
    </div>
  );
};

export default RenderYoutubeForm;
