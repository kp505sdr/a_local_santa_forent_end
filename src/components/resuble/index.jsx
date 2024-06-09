import React from "react";

const ListContent = ({ title, description, content, data }) => {
  return (
    <div className="w-11/12 mx-auto flex flex-col pb-20">
      <p className="text-xl font-semibold text-center p-3 bg-gray-300 my-4">
        {title}
      </p>
      <div>
        {description && <p className=" text-left mx-auto">{description}</p>}
      </div>

      {content?.map((item, idx) => (
        <div key={idx} className="m-2 rounded-sm p-3">
          <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
        </div>
      ))}

      {data?.map((itm, idx) => {
        return (
          <div key={idx} className="m-2 rounded-sm py-3">
            <p className="text-xl font-semibold text-left py-2 ">{itm.title}</p>
            {itm.item?.map((it, id) => (
              <p key={id} dangerouslySetInnerHTML={{ __html: it.text }}></p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ListContent;
