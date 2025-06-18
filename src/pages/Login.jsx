import SocialLoginButtons from "../components/Login/SocialLoginButtons";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="Englify Logo" className="h-8" />
        </div>
        <h2 className="text-xl font-semibold text-center">Welcome Back</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Create a free profile in less than 5 minutes
        </p>

        <SocialLoginButtons />

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t" />
          <span className="mx-2 text-sm text-gray-400">or</span>
          <hr className="flex-grow border-t" />
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
