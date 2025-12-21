import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import google_icon from "../../assets/images/google-icon.png";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const handleGoogleRegister = () => {
    alert("Google OAuth integration will go here!");
  };

  return (
    <>
      <Nav />
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <h2>Register</h2>

          {/* First and Last Name */}
            <div className="row name-row">
            <div className="field">
                <label>First Name</label>
                <input type="text" placeholder="First Name" required />
            </div>
            <div className="field">
                <label>Last Name</label>
                <input type="text" placeholder="Last Name" required />
            </div>
            </div>


          {/* Gender and DOB */}
          <div className="row">
            <div className="field">
              <label>Gender</label>
              <select required>
                <option value="" disabled selected></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select>

            </div>
            <div className="field">
              <label>Date of Birth</label>
              <input type="date" required />
            </div>
          </div>

          {/* Email */}
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          {/* Password */}
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" required />

          {/* Phone */}
          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          {/* Address */}
          <label>Address</label>
          <input type="text" placeholder="Enter your address" required />

          {/* Submit Button */}
          <button type="submit" className="submit-btn">Sign Up</button>

          {/* Google OAuth */}
          <button type="button" className="google-btn" onClick={handleGoogleRegister}>
            <img src={google_icon} alt="Google" style={{ width: '20px', height: '20px' }} />
            Continue with Google
          </button>

          <div className="auth-footer">
            Already have an account? <a href="/login">Login</a>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;