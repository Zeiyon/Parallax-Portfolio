import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function FooterComponent() {
  return (
    <>
      <div className="my:28 md:my-56"></div>
      <div className="flex flex-col items-center bg-black md:px-8 md:pt-0 py-8 md:py-0 sm:pt-0 absolute w-full left-0">
        <div className="max-w-screen-xl mb-4 md:mb-8 lg:w-[70%] h-48 bg-white p-4 rounded-[4rem] shadow-md flex flex-col md:flex-row items-center justify-center transform lg:-translate-y-24 sm:-translate-y-12">
          <h4 className="text-lg md:text-[1.2vw] max-w-full md:max-w-[40%] font-medium m-4 md:m-12 text-center">
            Want to stay connected? Send me your email so we can connect.
          </h4>
          <div className="flex items-center p-2 rounded-3xl border-black border-2 border-solid">
            <input
              className="m-2 outline-none w-3/4 sm:w-96"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="bg-green-800 hover:bg-[#234857] p-2 md:p-4 px-6 md:px-10 rounded-2xl font-semibold text-sm md:text-lg text-white">
              SUBMIT
            </button>
          </div>
        </div>

        <div className="w-full max-w-screen-xl grid md:grid-cols-2 px-4 md:px-8 lg:px-8 gap-4 transform md:-translate-y-12">
          <div className="h-full flex justify-center md:justify-start items-end">
            <a
              href="https://github.com/Zeiyon"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="pr-2"
                icon={faGithub}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/talhab/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="px-2"
                icon={faLinkedin}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
            </a>
            <a
              href="mailto:email@zeiyon.com?subject=Interested in your work"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="px-2"
                icon={faEnvelope}
                size="2xl"
                style={{ color: "#ffffff" }}
              />
            </a>
          </div>
          <div className="h-full flex justify-center md:justify-end items-end">
            <p className="text-center md:text-right text-white">
              Copyright © 2023. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
