import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useController } from "react-hook-form";

const RichTextEditor = ({ name, control }) => {
  const { field } = useController({ name, control });

  const handleChange = (html) => {
    field.onChange(html);
  };

  return (
    <ReactQuill
      theme="snow"
      value={field.value}
      onChange={handleChange}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["link", "image"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"],
        ],
      }}
    />
  );
};

export default RichTextEditor;
