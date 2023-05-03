import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const UserProfile = () => {
    const {user} = useContext(AuthContext)
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [profileImage, setProfileImage] = useState(user?.photoURL);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleEditClick = () => {
    setIsEditing(true);

  };

  const handleSaveClick = () => {
    setIsEditing(false);
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setSelectedFile(null);
  };

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

    return (
        <div className='container '>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
  <div className='flex justify-center items-center flex-col'>
  <img
        src={profileImage}
        alt="User Profile"
        style={{ width: '300px', height: '300px', borderRadius: '50%' }}
        onClick={handleEditClick}
      />
     <h2 className='text-3xl'>{displayName}</h2>
     <p>{user?.email}</p>
  </div>
       </div>
  {isEditing && ( <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">


          <label className="label"  htmlFor="display-name-input">
            <span className="label-text">Display Name:</span>
          </label>
          <input  type="text"
            id="display-name-input"
            value={displayName}
            onChange={handleDisplayNameChange} name='name'  placeholder="display-name" className="input input-bordered" />
        </div>


        <div className="form-control">
          <label htmlFor="profile-image-input" className="label">
            <span className="label-text">Profile Image:</span>
          </label>
          <input   type="file"
            id="profile-image-input"
            onChange={handleProfileImageChange} placeholder="photo url" />
       
        </div>
        <div className="form-control mt-6">
          <button onClick={handleSaveClick} className="btn btn-outline  btn-primary mb-4">Save </button>
          <button onClick={handleCancelClick} className="btn btn-outline btn-secondary">Cancel</button>
        </div>
      </div>
    </div>)}
  </div>
</div>

    </div>
  );
    
};

export default UserProfile;