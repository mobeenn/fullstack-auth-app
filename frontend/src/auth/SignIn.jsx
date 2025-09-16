import React, { useState } from "react";
import logo from "../assets/logo-colored.svg";
import toast from "react-hot-toast";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
   const [formData, setFormData] = useState({ email: "", password: "" });
   const [errors, setErrors] = useState({});
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   // Handle input change
   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   // Handle form submit
   const handleSubmit = async (e) => {
      e.preventDefault();
      let newErrors = {};

      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
         try {
            setLoading(true);

            const data = await loginUser({
               email: formData.email,
               password: formData.password,
            });

            toast.success(data.message || "Login successful ✅");

            // ✅ Save email in localStorage
            localStorage.setItem("userEmail", data.user.email);

            // ✅ Save token in localStorage
            localStorage.setItem("token", data.token);

            setTimeout(() => {
               navigate("/dashboard");
            }, 1500);
         } catch (err) {
            toast.error(err.message || "Login failed ❌");
         } finally {
            setLoading(false);
         }
      }
   };

   return (
      <div className="flex flex-col-reverse md:flex-row min-h-screen ">
         <div className="flex flex-col items-center justify-center w-full max-w-[720px] min-h-screen bg-black">
            {/* Logo + Title */}
            <div className="text-center mb-6">
               <div className="flex justify-center items-center gap-6 mb-2">
                  <div className="">
                     <img src={logo} alt="logo" />
                  </div>
                  <h1 className="text-[#FFFFFF] text-[30px] font-[700]">
                     TuringTech Test
                  </h1>
               </div>
            </div>
            <div className="w-full max-w-md p-6 bg-neutral-900 rounded-lg shadow-md">
               {/* Form */}
               <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-manrope font-extrabold text-[18px] text-[#FFFFFF] py-6 text-center">
                     Login to TuringTech Test
                  </h2>
                  {/* Email */}
                  <div>
                     <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-neutral-800 text-white focus:outline-none"
                     />
                     {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.email}
                        </p>
                     )}
                  </div>
                  {/* Password */}
                  <div>
                     <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-neutral-800 text-white focus:outline-none"
                     />
                     {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.password}
                        </p>
                     )}
                  </div>
                  {/* Login Button */}
                  <button
                     type="submit"
                     disabled={loading}
                     className="w-full p-2 bg-white text-black font-semibold rounded-md cursor-pointer hover:bg-[#ff5252] transition"
                  >
                     {loading ? "Logging in..." : "Login"}
                  </button>
                  {/* Divider */}{" "}
                  <div className="flex items-center justify-center my-4">
                     {" "}
                     <span className="w-full border-t border-gray-600"></span>{" "}
                     <span className="px-2 text-gray-400">Or</span>{" "}
                     <span className="w-full border-t border-gray-600"></span>{" "}
                  </div>
                  {/* Social Buttons */}{" "}
                  <button
                     type="button"
                     className="w-full flex items-center justify-center gap-2 p-2 bg-neutral-800 text-white rounded-md"
                  >
                     {" "}
                     <img
                        src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                        alt="Google"
                        className="w-5 h-5"
                     />{" "}
                     Continue with Google{" "}
                  </button>{" "}
                  <button
                     type="button"
                     className="w-full flex items-center justify-center gap-2 p-2 bg-neutral-800 text-white rounded-md"
                  >
                     {" "}
                     <img
                        src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                        alt="Apple"
                        className="w-5 h-5"
                     />{" "}
                     Continue with Apple{" "}
                  </button>
               </form>
               {/* Signup Link */}{" "}
               <p className="text-center text-sm text-gray-400 mt-4">
                  {" "}
                  Or{" "}
                  <a href="/register" className="text-yellow-400">
                     {" "}
                     click here to sign up{" "}
                  </a>{" "}
                  and get started{" "}
               </p>
            </div>
         </div>

         <div className="w-full max-w-[900px] min-h-screen bg-[#1B1B1B] flex items-center justify-center">
            <div className="w-full max-w-[491px] h-[491px] bg-[#323232] "></div>
         </div>
      </div>
   );
};
