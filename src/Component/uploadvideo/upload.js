import React, { useState } from 'react';
import './upload.css'; // assuming your CSS file is named 'styles.css'
import axios from 'axios';

function FileUpload() {
  const [fileName, setFileName] = useState('Browse Files');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append('upload_preset', 'videoes_preset');

    try {
      const api = `https://api.cloudinary.com/v1_1/dvy3tlqix/video/upload`;
      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <label htmlFor="custom-file-upload" className="filupp">
        <span style={{ color: 'white' }} className="filupp-file-name js-value">{fileName}</span>
        <input
          type="file"
          name="attachment-file"
          id="custom-file-upload"
          onChange={handleFileChange}
        />
      </label>
      <button onClick={handleUpload}>Upload</button>
    </>
  );
}

export default FileUpload;
