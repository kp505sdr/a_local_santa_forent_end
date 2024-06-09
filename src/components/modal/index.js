import React from "react";

const Modal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed z-10 inset-0 h-screen overflow-y-auto overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <div className="px-2 mt-24 ">
          <section className="py-1">
            <div className="w-full px-4 mx-auto mt-6 shadow-2xl">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-blueGray-700 text-xl font-bold">
                      {title} New Modal
                    </h6>
                    <button
                      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs py-0.5 px-2 sm:px-4 sm:py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={onClose}
                    >
                      X
                    </button>
                  </div>

                  {children}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Modal;
