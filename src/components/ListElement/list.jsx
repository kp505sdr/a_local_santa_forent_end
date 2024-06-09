import React from "react";

const List = ({ children }) => {
  return (
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
  );
};

export default List;
