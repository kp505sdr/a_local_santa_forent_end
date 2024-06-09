import React from "react";
import Layout1 from "../../components/Layout/Layout1";

const AboutUs = () => {
  return (
    <Layout1 title="About Us">
      <section className="py-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:py-16 mb-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="relative pb-20 md:pb-0 max-h-[40rem] max-w-xl">
              <img
                className="absolute inset-x-0 -bottom-10 min-h-64 max-h-96 -translate-x-1/2 left-1/2"
                src="https://images.unsplash.com/photo-1603290237413-3420e76dc1e3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt
              />
              <img
                className="relative max-w-sm  max-h-[30rem] xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt
              />
            </div>
            <div className="my-10 md:my-0">
              <h2 className="text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
                Hey 👋 I am
                <br className="block sm:hidden" />
                Jenny Carter
              </h2>
              <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti vel ea sapiente molestias distinctio ipsum eveniet
                nulla fuga dicta consequuntur quidem,
              </p>
              <p className="mt-4 text-base text-gray-600 md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300" />
                  <span className="relative"> Have a question{""} ? </span>
                </span>
                {""}
                <br className="block sm:hidden" />
                {""}
                Ask me on {""}
                <a
                  href="#"
                  title
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
};

export default AboutUs;
