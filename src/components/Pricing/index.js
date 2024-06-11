import React, { useState } from "react";

export const planFeatured = [
  {
    id: 1,
    title: "Free",
    duration: "One Month",
    subscrption:"free",
    subTitle: "No credit card required. Ever",
    price: "0",
    planfeature: [
      {
        text: "Use your own browser",
        icon: true,
      },
      {
        text: "Use your own OpenAI key",
        icon: true,
      },
      {
        text: "Data export",
        icon: true,
      },
      {
        text: "Basic support",
        icon: true,
      },
      {
        text: "Scheduled jobs",
        icon: false,
      },
      {
        text: " Smart downloader and cost-optimized AI",
        icon: false,
      },
      {
        text: "Dedicated server",
        icon: false,
      },
    ],
  },
  {
    id: 2,
    title: "Basic",
    duration: "Three Month",
    subscrption:"basic",
    subTitle: "No credit card required. Ever",
    price: "100",
    planfeature: [
      {
        text: "Use your own browser",
        icon: true,
      },
      {
        text: "Use your own OpenAI key",
        icon: true,
      },
      {
        text: "Data export",
        icon: true,
      },
      {
        text: "Basic support",
        icon: true,
      },
      {
        text: "Scheduled jobs",
        icon: false,
      },
      {
        text: " Smart downloader and cost-optimized AI",
        icon: false,
      },
      {
        text: "Dedicated server",
        icon: false,
      },
    ],
  },
  {
    id: 3,
    title: "Premium",
    duration: "Six Month",
    subscrption:"premium",
    subTitle: "No credit card required. Ever",
    price: "300",
    planfeature: [
      {
        text: "Use your own browser",
        icon: true,
      },
      {
        text: "Use your own OpenAI key",
        icon: true,
      },
      {
        text: "Data export",
        icon: true,
      },
      {
        text: "Basic support",
        icon: true,
      },
      {
        text: "Scheduled jobs",
        icon: false,
      },
      {
        text: " Smart downloader and cost-optimized AI",
        icon: false,
      },
      {
        text: "Dedicated server",
        icon: false,
      },
    ],
  },
  {
    id: 4,
    title: "Premium Pluse",
    duration: "One Year",
    subscrption:"premium pluse",
    subTitle: "No credit card required. Ever",
    price: "500",
    planfeature: [
      {
        text: "Use your own browser",
        icon: true,
      },
      {
        text: "Use your own OpenAI key",
        icon: true,
      },
      {
        text: "Data export",
        icon: true,
      },
      {
        text: "Basic support",
        icon: true,
      },
      {
        text: "Scheduled jobs",
        icon: false,
      },
      {
        text: " Smart downloader and cost-optimized AI",
        icon: false,
      },
      {
        text: "Dedicated server",
        icon: false,
      },
    ],
  },
];

const Pricing = ({ onSubmit, setPlan, prevStep }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    //p-4 md:p-8
    <form onSubmit={onSubmit} className="">
      <div className="py-2 w-full">
        <div className="mx-auto max-w-3xl text-center pb-12 md:pb-10">
          <h2 className="text-3xl font-bold sm:text-4xl mb-2">Pricing Plans</h2>
          <p className="text-sm sm:text-base">
            Choose a plan that best suits your data needs.
          </p>
       
        </div>
        {/*  */}
        <div className="grid grid-cols-1 gap-3 md:grid md:grid-cols-4">
          {planFeatured.map((itm) => {
            return (
              <div
                key={itm.id}
                className="hover:shadow-teal-300 p-6 m-1 text-center rounded-box shadow-xl xl:p-8 border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20"
              >
                <h3 className="mb-2 text-2xl font-semibold">{itm.title}</h3>
                <div className="flex justify-center items-baseline my-1">
                  <p className="font-light sm:text-lg">{itm.subTitle}</p>
                </div>
                <div className="flex justify-center items-baseline my-2">
                  <span className="mr-2 text-3xl font-extrabold">
                    ${itm.price}
                  </span>
                  <span className="text-xs">/ {itm.duration}</span>
                </div>
                <ul role="list" className="mb-5 space-y-4 text-left">
                  {itm?.planfeature.map((plan) => {
                    return (
                      <li key={plan.id} className="flex items-center space-x-3">
                        {plan.icon ? (
                          <svg
                            className="w-3 h-3 text-green-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                        ) : (
                          <svg
                            className="w-3 h-3 text-error"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                          </svg>
                        )}

                        <span className="text-xs sm:text-sm">{plan.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <button
                  type="submit"
                  // onClick={() => setPlan(itm)}
                  onClick={() => {setPlan(itm);setButtonClicked(true);}}
                  className={`w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 hover:bg-green-300 text-white ${buttonClicked ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Get Buy
                </button>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-5 flex  gap-x-2 justify-center">
          <button
            onClick={prevStep}
            className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-md h-[40px]"
          >
            <i className="fa fa-angle-double-left mr-1"></i>
            Previous
          </button>
        </div>
      </div>
    </form>
  );
};

export default Pricing;
