// COMPONENT IMPORT
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ICONS AND IMAGES IMPORT
import it1 from "../icons/IT1.png";
import it2 from "../icons/Diversity.png";
import it3 from "../icons/bpo14.png";
import it4 from "../icons/IT4.png";

const ITServices: React.FC = () => {
  // SPECIALIZATION DATA
  const itSpecializations = [
    {
      img: it1,
      title: "Full Stack Web Development",
      description:
        "Web Development at Vizcom exemplifies our commitment to delivering modern, scalable, and user-focused digital solutions. Our team of skilled professionals blends technical expertise with creative vision to design and develop dynamic websites and applications that elevate our clients' online presence and align with their business objectives. By leveraging the latest technologies like React, TypeScript, and Vite, we ensure every project is optimized for performance, security, and seamless user experience. Whether building intuitive interfaces, responsive websites, or robust e-commerce platforms, we approach every task with precision, creativity, and a deep understanding of client needs. At Vizcom, we believe web development is more than just creating websites—it’s about empowering businesses to thrive in the digital space. Through our innovative approach and dedication to excellence, we consistently set new benchmarks in the industry, helping our clients achieve growth and long-term success.",
    },
    {
      img: it2,
      title: "Market Reserch",
      description:
        "Market research is at the heart of Vizcom's ethos, serving as a strategic compass. It empowers our call centers to deliver exceptional services, remain at the forefront of industry trends, and cement our position as industry leaders. Vizcom's consistent commitment to ongoing research exemplifies our dedication to call center excellence. Our specialized approach involves the thorough collection, analysis, and interpretation of data tailored to the unique needs of the call center industry. We employ innovative techniques and modern technology to gather insights into customer preferences, emerging industry trends, and competitors' strategies. By delving deep into the market, we can identify open opportunities and refine our services to cater precisely to the evolving demands of our clients. Our approach to market research is agile and adaptable, enabling us to stay ahead in a fast-paced environment, foster client satisfaction, and drive the success of our start-up call center enterprise.",
    },
    {
      img: it3,
      title: "Software as a Service (SAAS)",
      description:
        "Vizcom's Software as a Service (SaaS) solutions embody our dedication to delivering scalable, efficient, and innovative software tailored to meet the evolving needs of businesses. Our team specializes in developing cloud-based platforms that empower clients with seamless access, enhanced productivity, and unparalleled flexibility. With expertise in modern frameworks and a user-centric approach, we design SaaS applications that combine intuitive interfaces with robust functionality. Whether creating business management tools, customer engagement platforms, or data-driven analytics systems, we ensure reliability, security, and performance at every stage. At Vizcom, we don’t just build software—we create solutions that drive transformation. Our commitment to leveraging cutting-edge technologies and best practices ensures our clients stay ahead in an increasingly digital world. By focusing on efficiency and innovation, our SaaS services help businesses achieve sustainable growth and success.",
    },
    {
      img: it4,
      title: "Internet of Things (IoT)",
      description:
        "At Vizcom, our Internet of Things (IoT) solutions redefine connectivity and efficiency by bridging the gap between devices, data, and decision-making. We develop smart, scalable IoT systems that empower businesses to optimize operations, enhance user experiences, and unlock the potential of real-time insights. Our team combines expertise in IoT architecture, sensor integration, and data analytics to create interconnected ecosystems tailored to diverse industries. From smart home automation and industrial IoT to predictive maintenance and fleet management, our solutions are designed for reliability, security, and seamless performance. Vizcom’s commitment to innovation ensures we stay at the forefront of IoT technology, enabling businesses to harness the power of connectivity and turn data into actionable intelligence. With our IoT solutions, clients can confidently navigate the future of smart technology and achieve sustainable growth.",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <Navbar />

      {/* MAIN BODY */}
      <div className="max-w-[1280px] mx-auto mt-[80px]">
        <div className="bg-[#0056B3]">
          {/* PAGE TITLE */}
          <h1 className="text-[40px] font-bold text-white text-center py-[40px] ">
            IT SERVICES
          </h1>
        </div>
        <div>
          {itSpecializations.map((service, index) => (
            <div key={index} className="my-[20px]">
              <div
                className={`bg-[#F8F8F8] my-[32px] flex flex-col lg:flex-row p-[12px] ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                } justify-evenly transition-transform transform duration-300 hover:scale-105 lg:mx-[20px] rounded-[8px]`}
              >
                {/* LEFT SECTION */}
                <div className=" flex flex-col justify-center items-center">
                  {/* SERVICE TITLE */}
                  <h5 className="font-bold text-[20px] text-center mb-[20px]">
                    {service.title}
                  </h5>
                  {/* SERVICE IMAGE */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-[200px] h-[200px] object-cover"
                  />
                </div>
                {/* RIGHT SECTION */}
                <div className="lg:w-2/3 mx-auto flex justify-center mt-[30px] lg:mt-0">
                  {/* SERVICE DESCRIPTION */}
                  <p className="text-[#2F2F2F] leading-[150%] md:text-left text-center">
                    {service.description}
                  </p>
                </div>
              </div>
              <hr className="w-[90%] border-t-1 border-[#00D4D4] my-[12px] mx-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default ITServices;
