import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from 'react-dropzone';

const Form = () => {
  const Api_Url = 'http://localhost:8000/api/';

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [errorText, setErrorText] = useState('');
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === '' || description === '' || category === '') {
      setError(true);
      setErrorText('Please fill all fields');
    } else if (!file) {
      setError(true);
      setErrorText('Please select an image');
    } else {
      setError(false);
      setLoading(true);

      try {
        const formData = new FormData();
formData.append('image', file);
formData.append('title', title);
formData.append('description', description);
formData.append('category', category); // replace `category` with the actual value of the category field
const response = await axios.post(Api_Url + 'posts/add', formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

        setLoading(false);
        setTitle('');
        setDescription('');
        setCategory('');
        setFile(null);
        console.log(response);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
  };

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  return (
    <div className="sidebar container">
      {error && (
        <div className="error_field">
          <span className="error_text">{errorText}</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            className="input-field"
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Blog Description</label>
          <ReactQuill value={description} onChange={setDescription} />
        </div>
        <div>
          <label>Category</label>
          <input
            className="input-field"
            type="text"
            placeholder="Blog Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Image</label>
          <Dropzone onDrop={handleDrop} accept="image/*">
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                {file ? (
                  <div>{file.name}</div>
                ) : (
                  <div>Drag and drop or click to select an image</div>
                )}
              </div>
            )}
          </Dropzone>
        </div>
        <button disabled={loading}>Submit Post</button>
      </form>
    </div>
  );
};

export default Form;
