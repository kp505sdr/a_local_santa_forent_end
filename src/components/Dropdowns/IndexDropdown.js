import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

export const dropdowndata = [{}];

const IndexDropdown = ({ headLink, hrefLink, subLink, subLinkText }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.useRef();
  const popoverDropdownRef = React.useRef();

  const openDropdownPopover = () => {
    if (window.innerWidth <= 640) {
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "right",
      });
    }

    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });

    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <Link
        className="hover:text-blueGray-500 text-blue-500 flex items-center text-xs sm:text-sm font-normal"
        to={hrefLink}
        ref={btnDropdownRef}
        onMouseOver={openDropdownPopover}
        onMouseOut={closeDropdownPopover}
      >
        <span className="inline-block">{headLink}</span>
      </Link>

      {/* <div
        ref={popoverDropdownRef}
        onMouseOver={openDropdownPopover}
        onMouseOut={closeDropdownPopover}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-blue-700 text-base z-50 float-left list-none text-left rounded shadow-lg min-w-48"
        }
      >
        {subLinkText &&
          subLinkText.map((sub, index) => (
            <Link
              key={index}
              to={sub.sublink ? sub.sublink[0]?.link : "#"}
              className={`hover:text-blueGray-500 text-blueGray-700 px-3 py-1 lg:py-2 flex items-center text-xs uppercase font-normal ${
                index === subLinkText.length - 1 ? "border-none" : "border-b-2"
              }`}
            >
              {sub?.Head && (
                <span className="inline-block ml-2">{sub?.Head}</span>
              )}
            </Link>
          ))}
      </div> */}
    </>
  );
};

export default IndexDropdown;
