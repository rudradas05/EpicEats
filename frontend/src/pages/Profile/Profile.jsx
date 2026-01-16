import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import "./Profile.css";
import { assets } from "../../assets/assets";

const Profile = () => {
  const { url, token, setToken } = useContext(StoreContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const getProfile = async () => {
    try {
      const response = await axios.get(url + "/api/user/getprofile", {
        headers: { token },
      });
      if (response.data.success) {
        setName(response.data.userData.name);
        setEmail(response.data.userData.email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        url + "/api/user/updateprofile",
        { name, email },
        { headers: { token } }
      );
      if (response.data.success) {
        getProfile();
        alert("Profile updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);

  return (
    <div className="profile">
      <div className="profile-info">
        <h2 className="profile-title">My Profile</h2>
        <div className="profile-details">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          <img src={assets.logout_icon} alt="Logout" />
          Logout
        </button>
      </div>
      <div className="profile-update">
        <h2 className="profile-title">Update Profile</h2>
        <form className="profile-form" onSubmit={handleUpdate}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="update-btn">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;