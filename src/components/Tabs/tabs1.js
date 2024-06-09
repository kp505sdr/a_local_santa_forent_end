import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Tabs1({ children }) {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <div className="flex gap-2 justify-around">
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab1
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab1>
              )}
            </>
          );
        })}
      </div>
      <div className="w-full px-2">
        {children.map((item, i) => {
          return (
            <div
              className={` ${
                i === activeTab
                  ? "visible flex justify-between items-center border-b text-sm sm:text-xl  py-2 my-2"
                  : "hidden"
              }`}
            >
              <Link to={item.props.hrefLink}> {item.props.component}</Link>
              <div className="flex items-center gap-x-2">
                {
                  <div className="text-xs">
                    {item.props.publish && (
                      <p className="font-normal">{item.props.publish}</p>
                    )}
                  </div>
                }
                {item.props.btnText && (
                  <div className="bg-teal-500  flex justify-center items-center rounded-md">
                    <button className="inline-flex items-center justify-center px-3 py-1.5 font-semibold tracking-wide text-white text-sm">
                      {item.props.btnText}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab1({ children, activeTab, currentTab, setActiveTab }) {
  return (
    <>
      <div
        className={` rounded cursor-pointer text-sm 
      ${activeTab === currentTab ? " text-green-500" : "text-black"}`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

Tab1.displayName = "Tab";
