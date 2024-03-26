import React, { useRef, useState } from 'react';
import './about.css';
import Navbar from '../../Component/Navbar/Navbar';
import Studentsuggetion from '../../Component/studentsuggetion/studentsuggetion';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('general');

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralTabContent />;
      case 'changePassword':
        return <ChangePasswordTabContent />;
      case 'suggetion':
        return <Suggetion/>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="account-settings-container">
        <h1 className="account-settings-title">My Profile</h1>

        <div className="account-settings">
          <div className="settings-sidebar">
            <ul className="settings-menu">
              <li
                className={`settings-item ${activeTab === 'general' ? 'active' : ''}`}
                onClick={() => setActiveTab('general')}>
                General
              </li>
              <li
                className={`settings-item ${activeTab === 'changePassword' ? 'active' : ''}`}
                onClick={() => setActiveTab('changePassword')}>
                Change password
              </li>
              <li
                className={`settings-item ${activeTab === 'suggetion' ? 'active' : ''}`}
                onClick={() => setActiveTab('suggetion')}>
                Give topic suggetion
              </li>
            </ul>
          </div>

          <div className="settings-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

const GeneralTabContent = () => {

  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }




  // Replace this with actual content
  return <div className="settings-content" style={{ width: '900px' }}>
    <div className="user-profile">

      {image ? <img src={URL.createObjectURL(image)} alt="User Avatar" className="user-avatar" />
        : <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1710201600&semt=ais" alt="User Avatar" className="user-avatar" />
      }
      <div className="profile-actions">
        {/* <button className="btn-upload">Upload new photo</button> */}
        <label className="btn-upload">
          Upload new photo
          <input type="file" style={{ display: 'none' }} onChange={handleImageChange} className="account-settings-fileinput" />
        </label>
        {/* <button className="btn-reset">Reset</button> */}
        {/* <p className="file-instructions">Allowed JPG, GIF or PNG. Max size of 800K</p> */}
      </div>
    </div>

    <div className="user-details">
      <div className="form-field">
        <label for="username">Username</label>
        <input type="text" placeholder='Enter your username' />
      </div>
      <div className="form-field">
        <label for="name">Full Name</label>
        <input type="text" placeholder='Enter your Full name' />
      </div>
      <div className="form-field">
        <label for="email">E-mail</label>
        <input type="text" placeholder='Enter your E-mail address' />
      </div>
      <div className="form-field">
        <label for="company">Phone Number</label>
        <input type="number" placeholder='Enter your phone number' />
      </div>
    </div>

    <div className="settings-footer">
      <button className="btn-save">Save changes</button>
      {/* <button className="btn-cancel">Cancel</button> */}
    </div>
  </div>;
};

const ChangePasswordTabContent = () => {
  // Replace this with actual content
  return <div className="settings-content" style={{ width: '900px' }}>

    <div className="user-details">
      <div className="form-field">
        <label for="newpass">New Password</label>
        <input type="password" placeholder='Enter your new password' name="" id="" />
      </div>
      <div className="form-field">
        <label for="conpass">Confirm Password</label>
        <input type="password" placeholder='Enter confirm password' name="" id="" />
      </div>
    </div>

    <div className="settings-footer">
      <button className="btn-save">Save changes</button>
      {/* <button className="btn-cancel">Cancel</button> */}
    </div>
  </div>;
};


const Suggetion = () => {
  return <Studentsuggetion/>
}



export default Profile;










