import React from "react";

// COMPONENT IMPORTS
import Navbar from "../components/Navbar";

// ICONS AND IMAGES IMPORT
import HeroImage from "../icons/BannerImg.png";
import VizcomName from "../icons/VizcomName.png";
import CEOImage from "../icons/CEOImage.png";
import HiThereModel from "../icons/HiThereImage.png";
import core1 from "../icons/Commitment.png";
import core2 from "../icons/Diversity.png";
import core3 from "../icons/Excellence.png";
import core4 from "../icons/Honesty.png";
import it1 from "../icons/IT1.png";
import it3 from "../icons/IT3.png";
import it4 from "../icons/IT4.png";
import bpo3 from "../icons/bpo3.png";
import bpo4 from "../icons/bpo4.png";
import CRM1 from "../icons/AmazonConnection.png";
import CRM2 from "../icons/RingCentral.png";
import CRM3 from "../icons/VICIDialers.png";
import Touch1 from "../icons/LocationIcon.png";
import Touch2 from "../icons/CallIcon.png";
import Touch3 from "../icons/MessageIcon.png";
import Client1 from "../icons/Client1.png";
import Client2 from "../icons/Client2.png";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* HEADER */}
      <Navbar />

      {/* MAIN BODY */}
      <div className="max-w-[1280px] mx-auto mt-[80px]">
        {/* START BANNER SECTION */}
        <div className="p-[20px] flex flex-col-reverse lg:flex-row justify-evenly">
          <div className="mt-[30px]">
            {/* VIZCOM NAME */}
            <div className="flex justify-center">
              <img src={VizcomName} />
            </div>
            {/* TAGLINE */}
            <div className="my-[20px] md:my-[40px] lg:my-[50px]">
              <h4 className="text-[24px] md:text-[40px] font-medium leading-[125%] text-center lg:text-left">
                Discovering boundless
              </h4>
              <h4 className="text-[24px] md:text-[40px] font-medium leading-[125%] text-center lg:text-left">
                opportunities
              </h4>
            </div>
            <div className="w-full flex justify-center lg:justify-start">
              {/* EXPLORE HERE BUTTON */}
              <a href="https://www.messenger.com/t/104020129158780/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0">
                <button className="bg-[#0056B3] px-[20px] h-[48px] md:h-[60px] mr-[12px] w-[200px] text-white rounded-[8px]">
                  Apply now
                </button>
              </a>
            </div>
          </div>
          {/* BANNER IMAGE */}
          <div className="flex justify-center items-center">
            <img className="h-full w-[500px]" src={HeroImage} alt="" />
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF BANNER SECTION */}

        {/* START CEO MESSAGE */}
        <div className="bg-[#0056B3] flex lg:flex-row flex-col p-[20px]">
          {/* CEO IMAGE */}
          <div className="flex justify-center p-[20px]">
            <img className="rounded-[8px]" src={CEOImage} alt="CEO Image" />
          </div>

          {/* CEO MESSAGE CONTENT */}
          <div className="w-full lg:w-2/3 text-[#F4F4F4] flex flex-col justify-center items-center">
            <p className="text-center text-[40px] font-black py-[8px]">
              CEO Message
            </p>
            <p className="text-[16px] font-thin px-[20px] lg:px-[10px] sm:px-[10px] text-center lg:text-left">
              Greetings from Vizcom Corporation, your homegrown partner in call
              center excellence, nestled amidst the breathtaking vistas of Nueva
              Vizcaya, Philippines! As we embark on our mission to redefine the
              BPO landscape, we extend a warm invitation to you, our future
              partners, to join us on this transformative journey along with our
              vision: "A Future Proof BPO Company Enabling Brands in the Digital
              Landscape" <br />
              <br />
              In today's rapidly evolving business landscape, the importance of
              staying ahead of the curve cannot be overstated. Vizcom
              Corporation has embraced this challenge wholeheartedly, aspiring
              to be the catalyst that propels your brand towards a future where
              opportunities and innovation abound.
              <br />
              <br /> Partnering with Vizcom Corporation means aligning your
              brand with a future-proof BPO powerhouse, ready to navigate the
              robust digital landscape. Together, we will create compelling
              customer experiences, drive growth, and turn challenges into
              opportunities. <br />
              <br />
              We invite you to connect with us, explore the endless
              possibilities, and experience the Vizcom difference. Let's embark
              on this exciting journey towards a future where your brand stands
              tall in the digital landscape
            </p>
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF CEO MESSAGE */}

        {/* START OF HI THERE SECTION */}
        <div className="flex w-full h-full justify-evenly">
          {/* HI THERE CONTENT */}
          <div className="lg:w-2/3 flex justify-center items-center">
            <div className=" flex-col justify-center items-center">
              {/* SECTION TITLE */}
              <p className="text-center text-[#0056B3] text-[40px] font-black pb-[25px]">
                HI THERE!
              </p>
              {/* SECTION CONTENT */}
              <p className="text-center lg:px-[120px] px-[40px] text-[#2F2F2F] h-full">
                Welcome to Vizcom Corporation, a trusted partner in providing
                superb call center services in the charming and picturesque
                province of Nueva Vizcaya. As an innovative homegrown call
                center company.
                <br />
                <br />
                We are fully committed to providing unmatched customer service
                and cutting-edge solutions. We take enormous delight in our
                journey towards producing unique and unforgettable customer
                experiences, with an unrelenting commitment to excellence and an
                uninhibited zest for continuous improvement.
              </p>
            </div>
          </div>

          {/* HI THERE IMAGE */}
          <div className="lg:flex hidden w-[40%]">
            <img src={HiThereModel} alt="" />
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF HI THERE SECTION */}

        {/* START OF OUR CORE VALUES */}
        <div className="bg-[#0056B3] py-[56px]">
          <div>
            <p className="text-center text-white text-[40px] font-black pb-[25px]">
              OUR CORE VALUES
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: core1, title: "Commitment" },
              { img: core2, title: "Diversity" },
              { img: core3, title: "Excellence" },
              { img: core4, title: "Honesty" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-center items-center"
              >
                <img src={item.img} alt={item.title} />
                <p className="text-[32px] font-bold text-white mt-[20px] text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[40px]">
            <a href="/about-us">
              <button className="bg-white  w-[200px] py-3 text-[#0056B3] rounded-[8px]">
                See more
              </button>
            </a>
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF OUR CORE VALUES */}

        {/* START OF SPECIALIZATION SECTION */}
        <div className="">
          <p className="text-center text-[#0056B3] sm:text-[40px] text-[28px] font-black pb-[25px]">
            OUR SPECIALIZATIONS
          </p>
          <p className="text-left pl-[12px] text-[#0056B3] sm:text-[40px] text-[28px] font-black pb-[25px]">
            BPO SERVICES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: core3, title: "Inbound Customer Support Experience" },
              { img: core4, title: "Food Order Processing Experience" },
              { img: bpo3, title: "Live Chat Support Experience" },
              { img: bpo4, title: "Social Media Monitoring" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-center items-center"
              >
                <img src={item.img} alt={item.title} />
                <p className="text-[20px] font-bold text-[#2F2F2F] mt-[20px] text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[40px]">
            <a href="/bpo-services">
              <button className="bg-[#0056B3] w-[200px] py-3 text-white rounded-md">
                See more
              </button>
            </a>
          </div>

          <p className="text-left pl-[12px] text-[#0056B3] sm:text-[40px] text-[28px] font-black py-[25px]">
            IT SERVICES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: it1, title: "Full Stack Web Development" },
              { img: core2, title: "Market Research" },
              { img: it3, title: "Software as a Service (SAAS)" },
              { img: it4, title: "Internet of Things (IoT)" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-center items-center"
              >
                <img src={item.img} alt={item.title} />
                <p className="text-[20px] font-bold text-[#2F2F2F] mt-[20px] text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[40px]">
            <a href="/it-services">
              <button className="bg-[#0056B3] w-[200px] py-3 text-white rounded-md">
                See more
              </button>
            </a>
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF SPECIALIZATION SECTION */}

        {/* START OF CRM PLATFORM */}
        <div className="py-[56px] bg-[#0056B3]">
          <div>
            <p className="text-center text-white sm:text-[32px] text-[24px] font-black">
              Client Relations Management Platform
            </p>
            <p className="text-center text-white  px-[20px] md:px-[100px] lg:px-[200px] pt-[28px]">
              Vizcom Corporation takes immense pride in its commitment to
              delivering top-notch client relations management through the
              utilization of cutting-edge tools and innovative platforms. Our
              dedication to providing the highest service level to our clientele
              is underpinned by the seamless integration of advanced
              technologies like Amazon Connect, Ring Central, VICI Dialers, and
              other industry-leading solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[56px]">
            {[
              {
                img: CRM1,
                title: "Amazon Connection",
                description:
                  " As a core component of our client relations strategy, Amazon Connect empowers us to provide a superior customer experience. Its cloud-based contact center solution allows us to efficiently manage customer interactions, ensure scalability, and deliver personalized support. With features like real-time analytics and integration capabilities, we gain valuable insights and adapt our services to meet evolving client needs promptly.",
              },
              {
                img: CRM2,
                title: "Ring Central",
                description:
                  "Vizcom leverages Ring Central's comprehensive communication and collaboration platform to enhance client interactions. This tool not only facilitates efficient internal communication but also streamlines our external communications with clients. It ensures that our team is always accessible, enabling us to respond promptly to inquiries and provide real-time assistance.",
              },
              {
                img: CRM3,
                title: "VICI Dialers",
                description:
                  "VICI Dialers play a crucial role in optimizing our outbound communication strategies. This innovative platform automates and manages outbound calls, ensuring that our agents connect with clients effectively and efficiently. With features such as predictive dialing and call recording, we maintain the highest level of quality and compliance in our interactions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-center items-center"
              >
                <img className="w-[120px]" src={item.img} alt={item.title} />
                <p className="text-[24px] font-bold text-white  mt-[20px] text-center">
                  {item.title}
                </p>
                <p className="text-center mt-[32px] text-white font-light lg:px-[10px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF CRM PLATFORM */}

        {/* START OF GET IN TOUCH SECTION */}
        <div>
          <p className="text-center text-[#0056B3] text-[32px] font-black">
            GET IN TOUCH
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mt-[56px]">
            {[
              {
                img: Touch1,
                title: "VISIT US",
                description: "Bambang, Nueva Vizcaya, Philippines, 3702",
              },
              {
                img: Touch2,
                title: "CALL US",
                description: "09564484530",
              },
              {
                img: Touch3,
                title: "MESSAGE US",
                description: "admin@vizcom.ph",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-center items-center bg-[#F8F8F8]"
              >
                <img className="w-[88px]" src={item.img} alt={item.title} />
                <p className="text-[20px] font-bold text-black mt-[20px] text-center">
                  {item.title}
                </p>
                <p className="text-center mt-[32px] text-black lg:px-[10px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF GET IN TOUCH SECTION */}

        {/* START OF CLIENT FEEDBACK */}
        <div className="py-[56px] bg-[#0056B3]">
          <p className="text-center text-white sm:text-[32px] text-[24px] font-black">
            CLIENT FEEDBACKS
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[56px] mx-[40px]">
            {[
              {
                img: Client1,
                feedback:
                  "“NICE Work Team! only about 34 mins left till close. Special Thanks for Vizcom Extra Efforts !! and Sharon for hoping on handling TL duties!!”",
              },
              {
                img: Client2,
                feedback:
                  "“Hey Roger, First off I really wanted to appreciate all the efforts put in by you. You really rose to the occasion and this can not go by unnoticed. Heartfelt thanks to you and the team at Vizcom” ",
              },
              {
                img: Client1,
                feedback:
                  "“This is huge for us Roger, shows what kind of partner you/Vizcom is. I would like to look at TL positions for your team. We can discuss further once this storm blows over. Thank you again.”",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 flex flex-col items-center">
                <img className="w-[150px]" src={item.img} alt={item.feedback} />

                <p className="text-center mt-[32px] lg:px-[10px] text-white">
                  {item.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF CLIENT FEEDBACK */}
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
