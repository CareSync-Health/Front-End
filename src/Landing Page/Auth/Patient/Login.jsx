import React, { useState } from "react";
import img2 from "../../../assets/google.png";
import img3 from "../../../assets/facebook.png";
import Group from '../../../assets/Group.png';
import { FaEnvelope, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { patient_login } from "../../../Redux/Actions/PatientActions";
import { ClipLoader } from 'react-spinners';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the submission
    const body = {
      email,
      password
    };

    try {
      await dispatch(patient_login(body, navigate));
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#E2F3F5] h-[100vh]">
      <div className="w-[100%] m-auto pt-5">
        <div className="lg:flex gap-40 lg:ms-16">
          <div className="mt-8">
            <img src={Group} alt="patientLogin-img" />
          </div>
          <div className="shadow-2xl bg-[#f5f5f5] lg:px-16 xs:px-[15px] py-7 lg:mt-0 xs:mt-[5rem]">
            <h4 className="text-start font-semibold font-Roboto">
              Welcome to <br />{" "}
              <span className="text-4xl text-[#22D1EE]">CareSync</span>
            </h4>
            <form className="mt-8" onSubmit={submitHandler}>
              <center>
                <div className="flex gap-2 shadow-lg bg-white w-[100%] lg:px-[130px] xs:px-[78px] py-[11px] rounded-[8px] font-Roboto">
                  <img src={img2} alt="google-icon" className="w-6" />
                  <h6 className='text-[18px] font-medium font-Inter'>Login with Google</h6>
                </div>
                <div className="flex gap-2 bg-white shadow-lg mt-4 w-[100%] lg:px-[130px] xs:px-[69px] py-[11px] rounded-[8px] font-Roboto">
                  <img src={img3} alt="google-icon" className="w-5" />
                  <h6 className='text-[18px] font-medium font-Inter'>Login with Facebook</h6>
                </div>
              </center>
              <center>
                <div className="flex gap-8 mt-5">
                  <hr className="w-2/5 mt-3" />
                  <p>OR</p>
                  <hr className="w-2/5 mt-3" />
                </div>
              </center>
              <div className="mt-5 font-Roboto">
                <div className="flex">
                  <span className="relative left-[3.5%] mt-[2.8%] text-[20px]">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    placeholder="Email"
                    name="name"
                    required
                    className="ms-[-5%] w-[150%] px-[55px] py-[10px] rounded-[8px] focus:outline-none outline-none border-none bg-[#fff]"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mt-4 flex">
                  <span className="relative left-[3.5%] mt-[2.8%] text-[20px]">
                    <FaKey />
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    className="ms-[-5%] w-[150%] px-[55px] py-[10px] rounded-[8px] focus:outline-none outline-none border-none bg-[#fff]"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-4 font-Roboto">
                <div>
                  <input type="checkbox" />
                  <span className="ms-3">Remember me</span>
                </div>
                <div>
                  <Link to="/auth/forgot_password" className="text-[#22D1EE]">
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <center>
                <button
                  type="submit"
                  className="font-Roboto bg-[#22D1EE] w-full mt-5 py-2 text-white rounded-md flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <ClipLoader size={24} color="#fff" /> // Show spinner when loading
                  ) : (
                    'Login'
                  )}
                </button>
                <h6 className="font-Roboto mt-5">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-[#22D1EE]">
                    Register
                  </Link>
                </h6>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
