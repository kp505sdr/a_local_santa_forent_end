import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      {" "}
      <footer className="border-t border-neutral-700/20 pt-10 px-6 bg-teal-600">
        <div className="mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-10 md:items-start lg:flex-nowrap">
            <div className="w-full lg:w-1/5">
              <div className="px-2">
                {" "}
                <p className="my-4 text-center">
                  Let's get started. Create Your Account For free
                </p>
                <div className="flex justify-center mx-auto">
                  <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-yellow-400 rounded-full h-[20px]">
                    Sign Up
                  </button>
                </div>
              </div>
              <div className=" py-3 px-2 flex flex-col items-center w-11/12  mx-auto">
                {" "}
                <h3 className="font-bold underline pb-3">Business Partner</h3>
                <li className="list-disc pb-2">Shreeda Events LLC</li>
                <div className=" border-8 py-2 rounded-full bg-gray-300 w-80 sm:w-96 text-center">
                  <h3 className="underline pb-2 text-xl">
                    Total Page View Today
                  </h3>
                  <p>1234</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-3 sm:gap-10 md:grid-cols-4">
                <div>
                  <h3 className="font-bold border-b-2 hover:border-yellow-600 ">
                    Lisiting Category
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link to="">
                        {" "}
                        <i className="fas fa-angle-double-right text-yellow-400 mr-2"></i>{" "}
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        <i className="fas fa-angle-double-right text-yellow-400 mr-2"></i>
                        Term of Service
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        <i className="fas fa-angle-double-right text-yellow-400 mr-2"></i>
                        Refurnd Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        <i className="fas fa-angle-double-right text-yellow-400 mr-2"></i>
                        Diverse Location
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold border-b-2 hover:border-yellow-600 ">
                    Quick Links
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link to="">
                        <i className="fas fa-angle-double-right text-yellow-400 mr-2"></i>
                        Cookie Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        <i className="fas fa-angle-double-right text-yellow-400 mr-2"></i>
                        Explore Reviews
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        <i className="fas fa-angle-double-right text-yellow-400 mr-2"></i>
                        Latest Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        <i className="fas fa-angle-double-right text-yellow-400 mr-2"></i>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-bold border-b-2 hover:border-yellow-600 ">
                    Contact Us
                  </h3>
                  <ul className="mt-4 space-y-2">
                    <li>
                      <Link to="">
                        <i className="fas fa-mobile-alt text-base text-yellow-400 mr-2"></i>
                        +123456987
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        <i className="fa fa-envelope text-base text-yellow-400 mr-2"></i>
                        hello@yourservice.io
                      </Link>
                    </li>

                    <div className="w-68">
                      <h3 className="text-base p-2 text-center">
                        {" "}
                        Join Group for Local Deals
                      </h3>

                      <div className="flex gap-x-10 justify-center pb-3">
                        <img
                          src="https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_1280.png"
                          className="w-12 h-12"
                          alt=""
                        />
                        <img
                          src="https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_1280.png"
                          className="w-12 h-12"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className=" py-2 mt-2 flex justify-between items-center border">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="border-transparent focus:border-transparent focus:ring-0 border-none text-xs sm:text-sm bg-transparent placeholder:text-black"
                      />
                      <i className="fas fa-paper-plane text-xl text-yellow-400 cursor-pointer mr-2"></i>
                    </div>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold border-b-2 hover:border-yellow-600 ">
                    Advertise Your Business
                  </h3>
                  <div className="mt-4 space-y-2">
                    <li className="list-disc flex items-center gap-2">
                      {" "}
                      Get Fixed Add on Home Page
                    </li>
                    <li className="list-disc flex items-center gap-2">
                      {" "}
                      Get Fixed Add on Home Page And Lisiting
                    </li>{" "}
                    <li className="list-disc flex items-center gap-2">
                      {" "}
                      Sponsored Ads
                    </li>
                    <h3 className="font-bold underline ">
                      Advertise Your Business
                    </h3>
                    <li className="list-disc flex items-center gap-2">
                      {" "}
                      www.crmsntra.com -Free Crm Software For
                    </li>
                    <li className="list-disc flex items-center gap-2">
                      {" "}
                      www.crmsntra.com -Free Crm Software For
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
