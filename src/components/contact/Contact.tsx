import "../../index.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactComponent: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col bg-black text-white p-14 rounded-2xl m-4 mt-28 shadow-lg w-full lg:w-5/6">
      <h2 className="text-5xl font-extrabold mb-4">Get in Touch</h2>
      <p className="mb-8 text-gray-400">
        I would love to hear more about your project. Please get in touch, and
        I'll get back to you soon!
      </p>

      <div className="lg:flex lg:justify-between">
        {/* Contact Info Section */}
        <div className="flex flex-col space-y-6 mb-6 lg:mb-0 lg:w-1/3">
          <div>
            <FontAwesomeIcon
              icon={faLocationDot}
              size="1x"
              className="text-green-600"
            />
            <h4 className="text-lg font-semibold mt-2">Location</h4>
            <p className="text-sm text-gray-400">Arlington, VA</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faPhone}
              size="1x"
              className="text-green-600"
            />
            <h4 className="text-lg font-semibold mt-2">Phone</h4>
            <p className="text-sm text-gray-400">(202) 867-8739</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="1x"
              className="text-green-600"
            />
            <h4 className="text-lg font-semibold mt-2">Email</h4>
            <p className="text-sm text-gray-400">ProjectTalha@gmail.com</p>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="lg:w-2/3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Name field */}
            <div>
              <label htmlFor="name" className="block mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-md text-black"
                required
              />
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-md text-black"
                required
              />
            </div>
          </div>

          {/* Message field */}
          <div className="mt-6">
            <label htmlFor="message" className="block mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 rounded-md text-black"
              required
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-green-700 hover:bg-[#234857] text-white font-bold py-2 px-6 rounded transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
