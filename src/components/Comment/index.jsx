import React from "react";

const Comment = () => {
  return (
    <form className="flex justify-center w-8/12 ">
      <div className=" rounded-[12px] w-full p-4 shadow-md border">
        <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black">
          Comment
        </p>
        <textarea
          className="h-40 px-3 text-sm py-1 mt-5 outline-none border-gray-300 w-full resize-none border rounded-lg placeholder:text-sm"
          placeholder="Add your comments here"
          defaultValue={""}
        />
        <div className="flex justify-between mt-2">
          <p className="text-sm text-blue-900 ">Enter atleast 15 characters</p>
          <button className=" py-2 font-semibold w-[150px] bg-yellow-400 px-3 text-sm text-white rounded-lg transition-all cursor-pointer hover:bg-blue-600">
            Submit comment
          </button>
        </div>
      </div>
    </form>
  );
};

export default Comment;
