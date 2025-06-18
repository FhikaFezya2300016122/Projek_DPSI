import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa"; // GANTI dari fa6 ke fa

const SocialLoginButtons = () => {
  return (
    <div className="flex flex-col gap-3">
      <button className="flex items-center justify-center gap-2 border rounded-lg py-2">
        <FcGoogle size={20} />
        <span>Login With Google</span>
      </button>
      <button className="flex items-center justify-center gap-2 border rounded-lg py-2">
        <FaTwitter size={20} />
        <span>Login With X</span>
      </button>
    </div>
  );
};

export default SocialLoginButtons;
