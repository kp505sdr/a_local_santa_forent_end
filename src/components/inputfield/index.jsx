import React from "react";

const Input = ({ labeltext, type, name, register }) => {
  return (
    <div className="flex flex-col mb-5 w-full">
      <label htmlFor={name} className="pb-1">
        {labeltext}
      </label>
      <input
        className="rounded-md border-none w-full bg-[#e8f0fe]"
        type={type}
        name={name}
        required
        {...register(name, { required: true })}
      />
    </div>
  );
};

export default Input;
