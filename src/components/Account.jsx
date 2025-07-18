import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Input, Select } from "antd";

const Account = () => {
  const [otpTime, setOtpTime] = useState(60);
  const [loginOtp, setLoginOtp] = useState(false);
  const [mobile, setMobile] = useState("");
  const [type, setType] = useState("Landlord");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState();
  const [errors, setErrors] = useState({});
  const [toggle, setToggle] = useState(false)

  const intervalRef = useRef(null);

  const handleTypeChange = (selectedOption) => {
    setType(selectedOption.value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length > 10) return;
    setPhone(digitsOnly);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    // Allow only digits
    const digitsOnly = value.replace(/\D/g, "");

    // Limit to 10 digits max
    if (digitsOnly.length > 10) return;

    setMobile(digitsOnly);
  };

  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };

  const startOtpTimer = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setOtpTime(60);

    intervalRef.current = setInterval(() => {
      setOtpTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleRegisterSubmit = () => {
    const newErrors = {};

    // Name must not be empty
    if (name.trim() === "") {
      newErrors.name = "Name is required.";
    }

    // Phone must be exactly 10 digits
    if (phone.trim() === "") {
      newErrors.phone = "Phone number is required.";
    } else if (phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    // Email must not be empty and must be valid
    if (email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Address must not be empty
    if (address.trim() === "") {
      newErrors.address = "Address is required.";
    }

    // Update all errors
    setErrors(newErrors);

    // If there are errors, stop here
    if (Object.keys(newErrors).length > 0) return;
  };

  const handleLoginSubmit = () => {
    // Validate mobile
    if (mobile.trim() === "") {
      setError("Mobile number is required.");
      return;
    } else if (mobile.length !== 10) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }

    // If valid
    setError("");
    setLoginOtp(true);
    startOtpTimer();
  };

  const handleToRegister = () =>{
    setToggle(true)
  }

  const handleToLogin = () =>{
    setToggle(false)
  }

  return (
    <main>
      <div className="relative w-full h-[100vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 z-10 bg-[#070026]"></div>
        <div
          className="absolute inset-0 z-20"
          style={{
            backgroundImage: "url('/login-form-image.jpg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            opacity: 0.3,
          }}
        ></div>

{toggle ? <div className="relative bg-white rounded-3xl m-2 p-10 py-6 max-md:p-6 w-full max-w-[30rem] shadow-md z-50 text-center">
          {/* Exit icon */}
          <Link to="/">
            <div className="absolute top-5 right-5 text-xs font-medium flex items-center gap-1 cursor-pointer">
              EXIT{" "}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path
                  d="M4.72667 8.39333L5.66667 9.33333L9 6L5.66667 2.66667L4.72667 3.60667L6.44667 5.33333H0V6.66667H6.44667L4.72667 8.39333ZM10.6667 0H1.33333C0.593333 0 0 0.6 0 1.33333V4H1.33333V1.33333H10.6667V10.6667H1.33333V8H0V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z"
                  fill="black"
                ></path>
              </svg>
            </div>
          </Link>

          {/* Logo */}
          <img
            src="/new_logo.webp"
            alt="BTJ Non Brokerage"
            className="mx-auto mb-3 h-12"
          />

          {/* Welcome text */}
          <h1 className="text-[23px] max-md:text-xl font-bold mb-1 tracking-tight">
            Welcome to BTJ Non Brokerage
          </h1>
          <p className="text-gray-400 mb-5 text-xs">
            Please Enter Your Details Below to Continue
          </p>

          <div className="w-full flex gap-4 mb-3">
            <div className="w-1/2">
              <div className="text-left mb-2 text-[13px] font-semibold">
                Select Type:
              </div>
              <Select
                className="w-full text-start border rounded-md h-[35px]"
                defaultValue={{ value: "Landlord", label: "Landlord" }}
                onChange={handleTypeChange}
                variant="filled"
                options={[
                  { value: "Landlord", label: "Landlord" },
                  { value: "Dealer", label: "Dealer" },
                  { value: "Tenant", label: "Tenant" },
                ]}
              />
            </div>

            <div className="w-1/2">
              <div className="text-left mb-2 text-[13px] font-semibold">
                Name
              </div>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full border ${
                  errors.name ? "border-red-500" : "border-gray-200"
                } bg-gray-50 rounded px-4 text-sm py-1.5 h-[35px] mb-1 focus:outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <div className="text-red-500 text-xs text-start mt-1">
                  {errors.name}
                </div>
              )}
            </div>
          </div>

          <div className="w-full flex gap-4 mb-2">
            <div className="w-1/2">
              <div className="text-left mb-2 text-[13px] font-semibold">
                Phone
              </div>
              <input
                type="text"
                placeholder="Enter Number"
                value={phone}
                onChange={handlePhoneChange}
                className={`w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-200"
                } bg-gray-50 rounded px-4 text-sm py-1.5 h-[35px] mb-1 focus:outline-none focus:ring-2 ${
                  errors.phone ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />
              {errors.phone && (
                <div className="text-red-500 text-xs text-start mt-1">
                  {errors.phone}
                </div>
              )}
            </div>

            <div className="w-1/2">
              <div className="text-left mb-2 text-[13px] font-semibold">
                Email
              </div>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } bg-gray-50 rounded px-4 text-sm py-1.5 h-[35px] mb-1 focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />
              {errors.email && (
                <div className="text-red-500 text-xs text-start mt-1">
                  {errors.email}
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="text-left mb-2 text-[13px] font-semibold">
              Address
            </div>
            <input
              type="text"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-full border ${
                errors.address ? "border-red-500" : "border-gray-200"
              } bg-gray-50 rounded px-4 text-sm py-1.5 h-[35px] mb-1 focus:outline-none focus:ring-2 ${
                errors.address ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
            />
            {errors.address && (
              <div className="text-red-500 text-xs text-start mt-1">
                {errors.address}
              </div>
            )}
          </div>
          {/* Login button */}
          <button
            className="w-full bg-blue-500 text-white py-2.5 rounded hover:bg-blue-600 transition mt-4"
            onClick={handleRegisterSubmit}
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center my-3">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Login link */}
          <p className="text-sm text-gray-600">
            Already a member??{" "}
            <span className="text-blue-600 font-medium hover:underline cursor-pointer" onClick={handleToLogin}>
              Login Here
            </span>
          </p>
        </div> : <div>
          {loginOtp ? (
            <div className="relative bg-white rounded-3xl m-2 p-20 py-8 max-md:p-6 w-full max-w-[30rem] shadow-md z-50 text-center">
              {/* Exit icon */}
              <Link to="/">
                <div className="absolute top-5 right-5 text-xs font-medium flex items-center gap-1 cursor-pointer">
                  EXIT{" "}
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M4.72667 8.39333L5.66667 9.33333L9 6L5.66667 2.66667L4.72667 3.60667L6.44667 5.33333H0V6.66667H6.44667L4.72667 8.39333ZM10.6667 0H1.33333C0.593333 0 0 0.6 0 1.33333V4H1.33333V1.33333H10.6667V10.6667H1.33333V8H0V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </Link>

              {/* Welcome text */}
              <h1 className="text-2xl max-md:text-xl font-bold mb-2 tracking-tight">
                OTP Verification Code
              </h1>
              <p className="text-gray-400 mb-4">
                We have sent a verification code to your mobile number
              </p>
              {/* Otp */}
              <Input.OTP
                length={4}
                size="middle"
                {...sharedProps}
                className=""
              />

              {/* Login button */}
              <button className="w-[160px] bg-[#070026] mt-6 text-white py-1.5 rounded-lg  hover:bg-[#070026] transition">
                Verify
              </button>

              <div className="text-center items-center flex justify-center mt-5">
                {otpTime == 0 ? (
                  <div
                    className="p-2 py-1 rounded border border-gray-400 text-sm cursor-pointer"
                    onClick={startOtpTimer}
                  >
                    Resend OTP
                  </div>
                ) : (
                  <div className="text-[#ff0303] bg-[#e9e9e9] p-5 py-1  rounded-2xl w-fit ">
                    {otpTime}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="relative bg-white rounded-3xl m-2 p-10 py-8 max-md:p-6 w-full max-w-[30rem] shadow-md z-50 text-center">
              {/* Exit icon */}
              <Link to="/">
                <div className="absolute top-5 right-5 text-xs font-medium flex items-center gap-1 cursor-pointer">
                  EXIT{" "}
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M4.72667 8.39333L5.66667 9.33333L9 6L5.66667 2.66667L4.72667 3.60667L6.44667 5.33333H0V6.66667H6.44667L4.72667 8.39333ZM10.6667 0H1.33333C0.593333 0 0 0.6 0 1.33333V4H1.33333V1.33333H10.6667V10.6667H1.33333V8H0V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </Link>

              {/* Logo */}
              <img
                src="/new_logo.webp"
                alt="BTJ Non Brokerage"
                className="mx-auto mb-4 h-12"
              />

              {/* Welcome text */}
              <h1 className="text-2xl max-md:text-xl font-bold mb-6 tracking-tight">
                Welcome to BTJ Non Brokerage
              </h1>

              {/* Mobile input */}
              <div className="text-left mb-2 text-sm font-semibold">
                Mobile Number
              </div>
              <input
                type="text"
                placeholder="Mobile"
                value={mobile}
                onChange={handleChange}
                className={`w-full border ${
                  error ? "border-red-500" : "border-gray-200"
                } bg-gray-50 rounded px-4 text-sm py-2.5 mb-1 focus:outline-none focus:ring-2 ${
                  error ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />

              {error && (
                <div className="text-red-500 text-xs text-start mt-1">
                  {error}
                </div>
              )}

              {/* Login button */}
              <button
                className="w-full bg-blue-500 text-white py-2.5 rounded hover:bg-blue-600 transition mt-4"
                onClick={handleLoginSubmit}
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center my-3">
                <hr className="flex-grow border-gray-300" />
                <span className="px-2 text-gray-500 text-sm">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              {/* Register link */}
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <span
                  className="text-blue-600 font-medium cursor-pointer hover:underline" onClick={handleToRegister}
                >
                  Register Here
                </span>
              </p>
            </div>
          )}
        </div> }
        {/* login page */}
        

        {/* register page */}
        
      </div>
    </main>
  );
};

export default Account;
