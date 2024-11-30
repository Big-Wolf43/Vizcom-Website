// COMPONENT IMPORT
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ICONS AND IMAGES IMPORT
import ZtellarLogo from "../icons/ztellar-logo.png";
import LearnImage from "../icons/learn-image.png";
import LecturerImage from "../icons/lecture-image.png";
import HostImage from "../icons/host-image.png";
import SponsorImage from "../icons/sponsor-image.png";
import ZtufImage from "../icons/ZtufSampleLogo.png";
import CommingSoon from "../icons/Coming-soon.png";

const SaaSProduct: React.FC = () => {
  return (
    <>
      {/* HEADER */}
      <Navbar />

      {/* MAIN BODY */}
      <div className="max-w-[1280px] mx-auto mt-[80px]">
        <div className="bg-[#0056B3]">
          {/* PAGE TITLE */}
          <h1 className="text-[40px] font-bold text-white text-center py-[40px] ">
            SAAS PRODUCT
          </h1>
        </div>
        <div className="">
          {/* ZTELLAR LOGO */}
          <div className="flex justify-center items-center my-[56px]">
            <img src={ZtellarLogo} alt="Ztellar.tech Logo" />
          </div>

          {/* SECTION TITLE */}
          <p className="text-center text-[#0056B3] sm:text-[36px] text-[24px] font-black">
            What is ztellar.tech?
          </p>

          {/* WHAT IS ZTELLAR */}
          <p className="text-center text-[#2F2F2F] px-[20px] md:px-[100px] lg:px-[200px] pt-[28px]">
            Ztellar.tech is a revolutionary Event Management Platform that
            empowers users to create, manage, and elevate events with ease. This
            cutting-edge platform offers a comprehensive suite of features,
            including live-streaming capabilities, robust event management
            tools, and a diverse range of courses for skill enhancement.
            Excitingly, Ztellar.tech goes beyond traditional event platforms by
            enabling users to become authors, sharing their knowledge and
            expertise with a global audience. By integrating advanced tools and
            fostering a collaborative environment, Ztellar.tech is transforming
            the way events are managed and knowledge is shared, underscoring its
            commitment to innovation and excellence in the event management and
            learning sectors.
          </p>
        </div>
        <div className="mt-[56px]">
          {/* POSSIBILITIES SECTION */}
          <p className="text-[32px] font-black text-[#0056B3] text-center">
            The possibilities are endless — you can ...
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {/* POSSIBILITIES DATA */}
            {[
              {
                img: LearnImage,
                title: "Learn",
                description:
                  "Learn at your own pace with affordable, high-quality courses. Unlock your potential and achieve your goals today!",
              },
              {
                img: LecturerImage,
                title: "Lecture (SME)",
                description:
                  "Share your expertise as a Subject Matter Expert (Author). Build your brand, earn income, and help learners succeed globally",
              },
              {
                img: HostImage,
                title: "Host Event",
                description:
                  "Engage your audience, ensure seamless program flow, and create a lasting impact on your attendees.",
              },
              {
                img: SponsorImage,
                title: "Sponsor",
                description:
                  "Elevate your brand by sponsoring events. Reach a diverse audience and make a lasting impact on potential clients.",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 flex flex-col items-center">
                {/* POSSIBILITIES IMAGE */}
                <img className="" src={item.img} alt={item.title} />
                {/* POSSIBILITIES TITLE */}
                <p className="py-[20px] text-[#0056B3] font-black text-[28px]">
                  {item.title}
                </p>
                {/* POSSIBILITIES DESCRIPTION */}
                <p className="text-[#2C2C2C] font-normal text-[16px] text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            {/* VISIT ZTELLAR BUTTON */}
            <a href="https://ztellar.tech/" target="_blank">
              <button className="bg-[#0056B3] text-white w-[250px] h-[52px] rounded-[4px] text-[18px] mt-[40px]">
                VISIT ZTELLAR
              </button>
            </a>
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        <div>
          {/* ZTUF IMAGE */}
          <div className="flex justify-center items-center my-[56px]">
            <img
              className="sm:w-[400px] w-[250px]"
              src={ZtufImage}
              alt="Ztuff Logo"
            />
          </div>
          {/* WHAT IS ZTUF SECTION */}
          <p className="text-center text-[#0056B3] sm:text-[36px] text-[24px] font-black">
            What is ztuf geo+?
          </p>
          {/* WHAT IS ZTUF GEO+ */}
          <p className="text-center text-[#2F2F2F] px-[20px] md:px-[100px] lg:px-[200px] pt-[28px]">
            Ztuf Geo+ is a premier Merchant Platform that redefines convenience
            and connectivity for event attendees and organizers alike.
            Specializing in event-related souvenirs, Ztuf Geo+ provides a
            seamless marketplace where customers can purchase exclusive
            memorabilia that captures the essence of their favorite events.
            Beyond souvenirs, Ztuf Geo+ bridges the gap between event sponsors
            and their audience by offering a unique opportunity to explore and
            order products and services directly from sponsors. For instance,
            attendees can purchase items from a featured air-conditioning
            company and even book their professional installation services—all
            within the platform. With its user-friendly interface and
            comprehensive offerings, Ztuf Geo+ elevates the event experience by
            combining commerce, convenience, and engagement. It’s more than just
            a marketplace—it’s a bridge between quality products, exceptional
            services, and meaningful connections.
          </p>
        </div>
        {/* COMMING SOON IMAGE */}
        <div className="flex justify-center items-center my-[56px]">
          <img
            className="sm:w-[400px] w-[250px]"
            src={CommingSoon}
            alt="Ztuff Logo"
          />
        </div>
      </div>
      <hr className="w-full border-t-1 border-[#00D4D4] my-[75px] " />

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default SaaSProduct;
