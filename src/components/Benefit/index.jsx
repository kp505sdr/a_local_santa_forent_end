import React from "react";

const Benefit = () => {
  const benefitsdetails = [
    {
      id: 1,
      text: "Get more customers to your business",
    },
    {
      id: 2,
      text: "Paid Listing can get a home page banner at www.test.com",
    },
    {
      id: 3,
      text: "Better reach",
    },
    {
      id: 4,
      text: "Popularity",
    },
    {
      id: 5,
      text: "More conversions",
    },
    {
      id: 6,
      text: "FB Promotions to your business listing page",
    },
    {
      id: 8,
      text: "Newseletter promotion for the business lisiting",
    },
    {
      id: 9,
      text: "Brand value",
    },
    {
      id: 11,
      text: "More enquiries",
    },
    {
      id: 12,
      text: "Business growth",
    },
  ];
  return (
    <div className="m-auto">
      <div className="text-center py-10 container mx-auto">
        <h3 className=" text-xl sm:text-2xl font-normal py-2">
          Benefits of listing your business in www.test.com
        </h3>
        <p className="mx-auto text-sm sm:text-base px-2 sm:px-2">
          Here is your chance to enhance your business and services. You could
          list your business with us for{" "}
          <strong className="text-red-600">free for 30 days</strong>.
        </p>

        <div className="text-center py-3">
          <h4 className="text-xl sm:text-2xl font-semibold">
            Glance at the{" "}
            <strong className="text-red-600 underline">benefit</strong> of Paid
            lisiting.
          </h4>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-9/12 m-auto">
        {benefitsdetails.map((item, index) => (
          <p
            className="flex md:items-center gap-x-2 justify-start py-2 "
            key={item.id}
          >
            <span className="">
              <i className="fas fa-play"></i>
            </span>
            <span className="text-sm sm:text-base">{item.text}</span>
          </p>
        ))}
      </div>

      <div className="mx-auto flex flex-col text-center justify-center py-5">
        <p className=" text-sm sm:text-base">
          Welcome to desi community of the USA!
        </p>

        <div className=" flex justify-center items-center py-5">
          <button className="bg-yellow-400 py-1.5 rounded-full px-4 font-semibold  text-sm sm:text-base">
            Add Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
