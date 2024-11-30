import Navbar from "../components/Navbar";

import LocationImage from "../icons/Contact-Location.png";
import CallImage from "../icons/Contact-Call.png";
import MessageImage from "../icons/Contact-Message.png";
import Footer from "../components/Footer";

const ContactUs: React.FC = () => {
  return (
    <>
      {/* HEADER */}
      <Navbar />

      {/* MAIN BODY */}
      <div className="max-w-[1280px] mx-auto mt-[80px]">
        <div className="bg-[#0056B3]">
          {/* PAGE TITLE */}
          <h1 className="text-[40px] font-bold text-white text-center py-[40px] ">
            CONTACT US
          </h1>
        </div>
        <div className=" flex mt-[20px] lg:flex-row flex-col">
          <div className="grid grid-cols-1">
            {/* CONTACT DATA */}
            {[
              {
                img: LocationImage,
                title: "VISIT US",
                description: "Bambang, Nueva Vizcaya, Philippines, 3702",
              },
              {
                img: CallImage,
                title: "CALL US",
                description: "09564484530",
              },
              {
                img: MessageImage,
                title: "MESSAGE US",
                description: "admin@vizcom.ph",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-center items-center bg-[#F8F8F8] lg:w-[500px]"
              >
                {/* CONTACT IMAGE */}
                <div className="">
                  <img className="w-[88px]" src={item.img} alt={item.title} />
                </div>
                <div>
                  {/* CONTACT TITLE */}
                  <p className="text-[24px] text-center font-bold text-[#2C2C2C] mt-[20px]">
                    {item.title}
                  </p>
                  {/* CONTACT DESCRIPTION */}
                  <p className="text-[#2C2C2C] text-center font-light mt-[20px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center  lg:w-2/3 space-y-4 py-6">
            <p className="text-left font-bold text-[40px]">SEND MESSAGE</p>

            {/* FULL NAME FIELD */}
            <label
              htmlFor="fullName"
              className="w-[300px] text-left text-gray-800"
            >
              Full Name
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                className="border-[1px] w-full  focus:placeholder-transparent duration-300 px-[12px] py-[12px] rounded-[8px]"
              />
            </label>

            {/* EMAIL ADDRESS FIELD */}
            <label
              htmlFor="email"
              className="w-[300px] text-left text-gray-800"
            >
              Email
              <input
                type="text"
                id="email"
                placeholder="Enter your email"
                className="border-[1px] w-full focus:placeholder-transparent duration-300 px-[12px] py-[12px] rounded-[8px]"
              />
            </label>

            {/* MOBILE NUMBER FIELD */}
            <label
              htmlFor="MobileNumber"
              className="w-[300px] text-left text-gray-800"
            >
              Phone Number
              <input
                type="text"
                id="MobileNumber"
                placeholder="Enter your phone number"
                className="border-[1px] w-full focus:placeholder-transparent duration-300 px-[12px] py-[12px] rounded-[8px]"
              />
            </label>

            {/* MESSAGE FIELD*/}
            <label
              htmlFor="message"
              className="w-[300px] text-left text-gray-800"
            >
              Message
              <textarea
                id="message"
                placeholder="Leave us a message"
                className="border-[1px] w-full focus:placeholder-transparent duration-300 px-[12px] py-[12px] rounded-[8px]"
              />
            </label>

            <button className="bg-[#0056B3] w-[200px] text-white font-medium h-[48px] rounded-[8px]">
              SEND
            </button>
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default ContactUs;
