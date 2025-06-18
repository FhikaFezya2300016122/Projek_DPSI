import { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-medium">Email*</label>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full mt-1 p-2 border rounded-md"
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Password*</label>
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot?</a>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full mt-1 p-2 border rounded-md pr-10"
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            👁
          </button>
        </div>
      </div>
      <button type="submit" className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
        Login
      </button>
      <p className="text-center text-sm">
        Don’t have an account?{" "}
        <a href="#" className="text-blue-600 hover:underline">Register</a>
      </p>
    </form>
  );
};

export default LoginForm;
