import React, { useState } from 'react';
import './upload.css'; // assuming your CSS file is named 'styles.css'

function FileUpload() {
  const [fileName, setFileName] = useState('Browse Files');

  const handleFileChange = (event) => {
    const value = event.target.value.split('\\').pop(); // extracting just the filename
    setFileName(value);
  };

  return (
    <label htmlFor="custom-file-upload" className="filupp">
      <span style={{color:'white'}} className="filupp-file-name js-value">{fileName}</span>
      <input
        type="file"
        name="attachment-file"
        id="custom-file-upload"
        onChange={handleFileChange}
      />
    </label>
  );
}

export default FileUpload;
