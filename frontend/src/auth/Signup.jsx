import React, { useState } from "react";
import logo from "../assets/logo-colored.svg";
import { registerUser } from "../api/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // ✅ import hook

export const Signup = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      terms: false,
   });
   const [errors, setErrors] = useState({});
   const [loading, setLoading] = useState(false);

   const navigate = useNavigate();

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
         ...formData,
         [name]: type === "checkbox" ? checked : value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      let newErrors = {};

      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (!formData.terms)
         newErrors.terms = "You must accept terms & conditions";

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
         try {
            setLoading(true);

            const data = await registerUser({
               name: formData.name,
               email: formData.email,
               password: formData.password,
            });

            toast.success(data.message || "Registration Successful ✅");

            // ✅ Redirect after success
            setTimeout(() => {
               navigate("/");
            }, 1500);
         } catch (err) {
            toast.error(err.message || "Registration failed ❌");
         } finally {
            setLoading(false);
         }
      }
   };

   return (
      <div className="flex flex-col-reverse md:flex-row min-h-screen">
         {/* Left Section */}
         <div className="flex flex-col items-center justify-center w-full max-w-[720px] min-h-screen bg-black">
            <div className="text-center mb-6">
               <div className="flex justify-center items-center gap-6 mb-2">
                  <img src={logo} alt="logo" />
                  <h1 className="text-[#FFFFFF] text-[30px] font-[700]">
                     TuringTech Test
                  </h1>
               </div>
            </div>

            {/* Card */}
            <div className="w-full max-w-md p-6 bg-neutral-900 rounded-lg shadow-md">
               <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-manrope font-extrabold text-[18px] text-[#FFFFFF] py-6 text-center">
                     Unlock your edge with TuringTech Test
                  </h2>
                  {/* Name */}
                  <div>
                     <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-neutral-800 text-white focus:outline-none"
                     />
                     {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.name}
                        </p>
                     )}
                  </div>
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
                  {/* Terms Checkbox */}
                  <div className="flex items-center gap-2">
                     <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        className="w-4 h-4"
                     />
                     <label className="text-sm text-gray-400">
                        I accept the{" "}
                        <a href="#" className="text-yellow-400">
                           terms and conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-yellow-400">
                           privacy policy
                        </a>
                     </label>
                  </div>
                  {errors.terms && (
                     <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
                  )}
                  {/* Sign Up Button */}
                  <button
                     type="submit"
                     disabled={loading}
                     className="w-full p-2 bg-white text-black font-semibold rounded-md cursor-pointer hover:bg-[#ff5252] transition"
                  >
                     {loading ? "Registering..." : "Sign Up"}
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
            </div>
         </div>

         {/* Right Section */}
         <div className="w-full max-w-[900px] min-h-screen bg-[#1B1B1B] flex items-center justify-center">
            <div className="w-full max-w-[491px] h-[491px] bg-[#323232]"></div>
         </div>
      </div>
   );
};
