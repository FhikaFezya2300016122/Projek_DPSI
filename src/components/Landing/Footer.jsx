import React from "react";
import Icon from "../../Images/Icon.png";

const Footer = () => {
  return (
    <footer className="bg-[#F3FDDC] pt-16 pb-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={Icon} alt="Englify Logo" className="w-6 h-6" />
            <span className="text-lg font-semibold">Englify</span>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            Subscribe to our newsletter for the latest features and updates.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-sm"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm">
              Join
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            By subscribing, you accept our Privacy Policy and agree to receive updates.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-3">Helpful links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Support center</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-3">Connect with us</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">Join us</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Event</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-3">Stay Update</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Youtube</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-12">
        © 2025 Englify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
