import React, { useState } from "react";

export function Tabs({ children }) {
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
      <div className="flex justify-around">
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </div>
      <div className="">
        {children.map((item, i) => {
          return (
            <div
              className={` ${
                i === activeTab
                  ? "visible flex justify-between border-b-2 pb-2"
                  : "hidden"
              }`}
            >
              <div className="flex flex-col">
                {item.props.component && (
                  <p className="">{item.props.component}</p>
                )}
                {
                  <div className="text-xs">
                    {item.props.publish && (
                      <p className="font-normal">{item.props.publish}</p>
                    )}
                  </div>
                }
              </div>

              {item.props.btnText && (
                <div className="bg-teal-500 h-10">
                  <button className="inline-flex items-center justify-center py-1.5 px-3 rounded-md font-sans font-semibold tracking-wide text-white text-sm">
                    {item.props.btnText}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({
  title,
  key,
  children,
  activeTab,
  currentTab,
  setActiveTab,
}) {
  return (
    <>
      <h2 className="text-2xl font-bold">{title}</h2>
      {children && (
        <div
          key={key}
          className={`rounded cursor-pointer text-center text-xs sm:text-sm font-semibold py-2 my-1 w-full
      ${activeTab === currentTab ? " bg-[#16b19f] text-white" : "text-black"}`}
          onClick={() => setActiveTab(currentTab)}
        >
          {children}
        </div>
      )}
    </>
  );
}

Tab.displayName = "Tab";
