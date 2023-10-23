import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, resume } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = resume;
    link.target = "_blank";
    link.download = "Resume.pdf";

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically trigger a click event
    link.click();

    // Remove the link from the body
    document.body.removeChild(link);
  };

  const handleResumeDownloadiOS = () => {
    // For iOS, use the 'window.open' method to open the file in a new window
    window.open(resume, "_blank");
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window, scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <div className="flex flex-col gap-1">
            <p className="text-white text-[-18px] font-bold cursor-pointer">
              Bryan Chavarria
            </p>
            <span className="text-secondary font-medium flex-shrink-0">
              Computer Science Engineer
            </span>
          </div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          {/* Add a new li element for "Download Resume" */}
          <li
            className={`${
              active === "Download Resume" ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => {
              setActive("Download Resume");
              // Check if it's an iOS device
              if (navigator.userAgent.match(/ipad|iphone/i)) {
                handleResumeDownloadiOS();
              } else {
                handleResumeDownload();
              }
            }}
          >
            <a href="#download">Download Resume</a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              {/* Add a new li element for "Download Resume" in the mobile menu */}
              <li
                className={`${
                  active === "Download Resume" ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Download Resume");
                  // Check if it's an iOS device
                  if (navigator.userAgent.match(/ipad|iphone/i)) {
                    handleResumeDownloadiOS();
                  } else {
                    handleResumeDownload();
                  }
                }}
              >
                <a href="#download">Download Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar