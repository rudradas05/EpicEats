import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    image: assets.profile_icon,
    email: "",
    phone: "",
    address: {
      line1: "",
      line2: "",
    },
    gender: "",
    dob: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="profile">
      <div className="profile-header">
        <img src={userData.image} alt="" />
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) => {
              setUserData((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        ) : (
          <p>{userData.name}</p>
        )}
      </div>
      <hr />
      <div className="profile-info">
        <p className="profile-info-title">PROFILE INFORMATION</p>
        <div className="profile-info-content">
          <div className="profile-info-item">
            <p>Email id:</p>
            <p>{userData.email}</p>
          </div>
          <div className="profile-info-item">
            <p>Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => {
                  setUserData((prev) => ({ ...prev, phone: e.target.value }));
                }}
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>
          <div className="profile-info-item">
            <p>Address:</p>
            {isEdit ? (
              <p>
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={userData.address.line1}
                  type="text"
                />
                <br />
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address.line2}
                  type="text"
                />
              </p>
            ) : (
              <p>
                {userData.address.line1}, {userData.address.line2}
              </p>
            )}
          </div>
        </div>

        <p className="profile-info-title">BASIC INFORMATION</p>
        <div className="profile-info-content">
          <div className="profile-info-item">
            <p>Gender:</p>
            {isEdit ? (
              <select
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>
          <div className="profile-info-item">
            <p>Date of Birth:</p>
            {isEdit ? (
              <input
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
      </div>
      <div className="profile-btn">
        {isEdit ? (
          <button onClick={() => setIsEdit(false)}>Save Infromation</button>
        ) : (
          <button onClick={() => setIsEdit(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
