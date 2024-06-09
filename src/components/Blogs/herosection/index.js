import React, { useState } from "react";

const MyImage = ({ imgs, Children }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div className="flex flex-col md:flex-row justify-center gap-x-10 mx-auto ">
      <div className="w-full md:max-w-xl flex justify-center">
        <img
          className="shadow-2xl w-full h-64 sm:h-96"
          src={`${process.env.REACT_APP_API}/${mainImage}`}
          alt={`Image ${mainImage.id}`}
        />
      </div>

      <div
        className="flex md:flex-col
         justify-center gap-x-1 tems-center sm:px-0 md:h-96 overflow-y-auto w-full md:w-1/6"
      >
        {imgs.map((curElm) => {

          return (
            <figure key={curElm.id} className="max-w-sm">
              <img
                src={`${process.env.REACT_APP_API}/${curElm}`}
                alt={`Image ${curElm.id}`}
                className="min-w-14 sm:w-full cursor-pointer sm:max-w-32 object-cover pt-1 h-12 sm:h-24"
                onClick={() => setMainImage(curElm)}
              />
            </figure>
          );
        })}
      </div>
      {Children}
    </div>
  );
};

export default MyImage;
