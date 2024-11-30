import React, { useState } from "react";

// ICONS AND IMAGES IMPORT
import core1 from "../icons/Commitment.png";
import core2 from "../icons/Diversity.png";
import core3 from "../icons/Excellence.png";
import core4 from "../icons/Honesty.png";
import core5 from "../icons/core5.png";
import core6 from "../icons/core5.png";
import core7 from "../icons/bpo3.png";
import core8 from "../icons/core8.png";
import Team1 from "../icons/SirJeff.png";
import Team2 from "../icons/SirPaul.png";
import Team3 from "../icons/AttyHazel.png";
import Team4 from "../icons/MsJessica.png";
import Team5 from "../icons/MsLaxsha.png";

// COMPONENT IMPORT
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// INTERFACE
interface TeamMember {
  img: string;
  name: string;
  bio: string;
  position: string;
}

const AboutUs: React.FC = () => {
  const [selectedTeamMember, setSelectedTeamMember] =
    useState<TeamMember | null>(null);

  // TEAM MEMBER DATA
  const teamMembers = [
    {
      img: Team1,
      name: "Engr. JEFERSON S. BINAY-AN",
      position: "CEO, RMEE, Assoc ASEAN Engineer",
      bio: "Jeferson S. Binay-an, RMEE, Assoc ASEAN Engineer, stands at the helm of Vizcom Corporation as its CEO, bringing with him a robust foundation in Mechanical Engineering. His visionary leadership has driven Vizcom from its inception to a high potential start-up venture marked by its steadfast embrace of cutting-edge technologies. Beyond his role as a self-motivated business leader, He is a fervent advocate for corporate social responsibility. He not only champions the cause but also actively engages in various socio-civic organizations and humanitarian initiatives, reflecting his deep commitment to making a meaningful impact in the communities around Vizcom.",
    },
    {
      img: Team2,
      name: "Mr. ROGER PAUL BASSI",
      position: "Operations Manager",
      bio: "Mr. Roger Bassi holds the crucial position of Operations Head at Vizcom Corporation. With his broad knowledge of strategic planning and outstanding leadership abilities, Mr. Bassi plays a vital role in guiding the company's operational success. His dedication and visionary approach have been instrumental in establishing Vizcom; he has also maintained his reputation as a driving force behind Vizcom's remarkable success in the competitive business landscape.",
    },
    {
      img: Team3,
      name: "Atty. HAZEL BUCTAYON",
      position: "Legal Adviser",
      bio: "Attorney Hazel Buctayon-Tayaban is a respected legal professional with an exceptional track record of expertise and dedication. As the esteemed Legal Adviser at Vizcom Corporation, she combines her strong legal insights with her commitment to providing accurate counsel and ensuring the highest standards of corporate compliance. Attorney Buctayon is known for her sharp intellect, tenacity, and firm commitment to protecting Vizcom's legal interests in the ever-evolving landscape of the call center industry.",
    },
    {
      img: Team4,
      name: "Ms. JESSICA KENIO",
      position: "Consultant",
      bio: "Ms. Jessica Kenio, a talented consultant at Vizcom Corporation, has been instrumental in establishing corporate values and operational excellence since its inception. She has proven to be an invaluable asset, inspiring the company to consistently provide outstanding call center solutions, maintaining its ongoing and remarkable prosperity.",
    },
    {
      img: Team5,
      name: "Ms. LAXSHAMI PAL",
      position: "HR Specialist",
      bio: "Ms. Laxshami Pal serves as an HR Specialist at Vizcom Corporation. With her expertise and dedication, she plays an essential role in talent acquisition, employee development, and sustaining a thriving work culture within the organization. Ms. Pal's contributions as an HR Specialist significantly improve Vizcom's human resources operations, fostering a positive and efficient work environment.",
    },
  ];

  // OPEN MODAL
  const openModal = (member: TeamMember) => {
    setSelectedTeamMember(member);
  };

  // CLOSE MODAL
  const closeModal = () => {
    setSelectedTeamMember(null);
  };

  return (
    <>
      {/* HEADER */}
      <Navbar />

      {/* MAIN BODY */}
      <div className="max-w-[1280px] mx-auto mt-[80px]">
        {/* START OF MISSION VISION SECTION */}
        <div className="">
          {/* ABOUT US SECTION */}
          <div className="pb-[56px]">
            {/* ABOUT TITLE */}
            <div className="bg-[#0056B3]">
              {/* PAGE TITLE */}
              <h1 className="text-[40px] font-bold text-white text-center py-[40px] ">
                ABOUT US
              </h1>
            </div>

            {/* ABOUT DESCRIPTION */}
            <p className="text-center text-[#2F2F2F] px-[20px] md:px-[100px] lg:px-[200px] pt-[28px]">
              Vizcom Corporation is an innovative startup operating a dynamic
              call center in Nueva Vizcaya, Philippines. With a team boasting
              extensive expertise in the BPO sector and a 15-year collective
              experience in diverse corporate settings, Vizcom is committed to
              excellence in inbound and outbound customer service, live voice
              transcription, telemarketing, appointment-setting solutions, back
              office support, non-voice technical support are among others.
              <br />
              <br />
              Central to our mission is aiding businesses in achieving their
              objectives through exceptional customer support, forging enduring
              partnerships with clients, and exceeding expectations. Vizcom's
              competent and knowledgeable personnel, equipped with innovative
              technology, ensure precise and effective call management. We
              prioritize investing in staff technical skills development to stay
              updated on industry trends and effective practices. Vizcom
              Corporation is dedicated to delivering outstanding results and
              outstanding service quality to its valued clients
            </p>
          </div>
          {/* MISSION SECTION */}
          <div className="pb-[56px] ">
            {/* MISSION TITLE */}
            <p className="text-center text-[#0056B3] text-[40px] font-black mb-[28px]">
              MISSION
            </p>
            {/* MISSIONS */}
            <div className="flex justify-evenly mx-4 lg:flex-row flex-col">
              <div className="flex flex-col  items-center lg:w-1/4 w-full">
                <div className="bg-[#89CFF0] w-[50px] h-[50px] flex justify-center items-center rounded-[25px]">
                  <p className="text-[20px] font-bold">1</p>
                </div>

                <p className="text-[#2F2F2F] text-center pt-6">
                  To deliver outstanding service and support to our clients,
                  fostering economic growth in Nueva Vizcaya by creating
                  meaningful job opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center lg:w-1/2 w-full lg:mx-5 my-8">
                <div className="bg-[#89CFF0] w-[50px] h-[50px] flex justify-center items-center rounded-[25px]">
                  <p className="text-[20px] font-bold">2</p>
                </div>
                <p className="text-[#2F2F2F] text-center pt-6">
                  To invest continuously in the development of our employees’
                  skills and knowledge while also providing them with
                  opportunities for career advancement and personal growth,
                  thereby enhancing Nueva Vizcaya’s reputation as a hub of
                  highly skilled and competent professionals.
                </p>
              </div>
              <div className="flex flex-col items-center lg:w-1/4 w-full">
                <div className="bg-[#89CFF0] w-[50px] h-[50px] flex justify-center items-center rounded-[25px]">
                  <p className="text-[20px] font-bold">3</p>
                </div>
                <p className="text-[#2F2F2F] text-center pt-6">
                  To position ourselves as a premier call center company within
                  the BPO industry.
                </p>
              </div>
            </div>
          </div>
          {/* VISION SECTION */}
          <div>
            <p className="text-center text-[#0056B3] text-[40px] font-black mb-[28px]">
              VISION
            </p>
            <p className="text-center text-[24px] text-[#2F2F2F]">
              A future-proof BPO <br /> company enabling brands in <br /> the
              digital landscape
            </p>
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF MISSION VISION SECTION */}

        {/* START OF CORE VALUES SECTION */}
        <div className="py-[56px] bg-[#0056B3]">
          {/* SECTION TITLE */}
          <p className="text-center text-white sm:text-[40px] text-[24px] font-black">
            OUR CORE VALUES
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* CORE VALUES DATA */}
            {[
              {
                img: core1,
                title: "Commitment",
                description:
                  "Vizcom's core value commitment is exemplified in our call center operations by our constant dedication to delivering exceptional service to every caller. We prioritize active listening, empathy, and swift issue resolution to ensure that each customer feels valued and heard, fostering long-lasting relationships and trust in our brand.",
              },
              {
                img: core2,
                title: "Diversity",
                description:
                  "We wholeheartedly embrace diversity as a core value. We believe that a diverse workforce fosters creativity, inclusivity, and a broader perspective, enabling us to better serve our world community and develop solutions that resonate with people from all walks of life. In our commitment to diversity, we strive to foster an environment where everyone's unique talents and backgrounds are valued and celebrated.",
              },
              {
                img: core3,
                title: "Excellence",
                description:
                  "Excellence is at the heart of Vizcom Corporation's core values. We are committed to upholding the highest standards of quality in every aspect of our work, from product development to customer service. Our relentless pursuit of excellence ensures that we deliver outstanding solutions that meet and go beyond the expectations of our clients.",
              },
              {
                img: core4,
                title: "Honesty",
                description:
                  "Honesty is one of the fundamental principles of Vizcom Corporation's core values. We uphold the highest ethical standards in all our interactions, promoting trust and openness within our company as well as in our interactions with our clients. Our steadfast commitment to honesty guarantees that we have integrity in our actions, decisions, and relationships, laying the platform for long-lasting partnerships and ethical business practices.",
              },
              {
                img: core5,
                title: "Innovation",
                description:
                  "Innovation is the lifeblood of Vizcom Corporation, deeply embedded in our core values. We consistently extend beyond the boundaries of technology and creativity to create innovative solutions that empower our clients and enhance their visual communication endeavors. Our persistence in innovation propels us to stay at the forefront of the industry, delivering forward-thinking products and services that shape the future of visual communication.",
              },
              {
                img: core6,
                title: "Integrity",
                description:
                  "Integrity lies at the heart of Vizcom Corporation's core values. We devote ourselves to the highest ethical standards, making certain that honesty, transparency, and trustworthiness guide every decision and action. Our adherence to integrity extends to our relationships with clients, partners, and employees, fostering an environment of strong ethical conduct and mutual respect.",
              },
              {
                img: core7,
                title: "Loyalty",
                description:
                  "Loyalty is a fundamental core value at Vizcom Corporation. We prioritize the trust and commitment of our clients, employees, and partners, establishing strong relationships built on mutual support and dedication. Our loyalty extends beyond business transactions, creating a sense of camaraderie and cooperation that drives us toward shared success and growth.",
              },
              {
                img: core8,
                title: "Empathy",
                description:
                  "Empathy is one of the aspects of Vizcom Corporation's core values. We prioritize understanding and relating with the needs and emotions of our clients and colleagues. Through empathetic engagement, we not only provide solutions that truly resonate with our customers but also cultivate a supportive and compassionate work culture that promotes creativity and collaboration.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col items-center mt-[32px]"
              >
                <img className="w-[200px]" src={item.img} alt={item.title} />
                {/* CORE VALUES TITLE */}
                <p className="text-[32px] font-bold text-white mt-[20px] text-center">
                  {item.title}
                </p>
                {/* CORE VALUES DESCRIPTION */}
                <p className="text-white text-center font-light mt-[20px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF CORE VALUES SECTION */}

        {/* START OF MEET THE TEAM */}
        <div>
          {/* SECTION TITLE */}
          <p className="text-center text-[#0056B3] sm:text-[40px] text-[24px] font-black">
            MEET THE TEAM
          </p>

          <div className="p-4 flex flex-col justify-center items-center my-8">
            {/* IMAGE */}
            <img
              className="w-[200px] h-[200px] rounded-full"
              src={teamMembers[0].img}
              alt={teamMembers[0].name}
            />
            {/* NAME */}
            <p className="text-center text-[#2C2C2C] font-bold mt-4 text-[24px]">
              {teamMembers[0].name}
            </p>
            {/* POSITION */}
            <p className="text-center text-[#2C2C2C] font-normal">
              {teamMembers[0].position}
            </p>
            {/* READ MORE BUTTON */}
            <button
              className="mt-[32px] px-4 py-2 bg-[#0056B3] text-white rounded font-thin w-[220px] hover:opacity-80 duration-300"
              onClick={() => openModal(teamMembers[0])}
            >
              Read More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(1).map((item, index) => (
              <div
                key={index}
                className="p-4 flex flex-col justify-center items-center"
              >
                {/* TEAM IMAGE */}
                <img
                  className="w-[150px] h-[150px] rounded-full"
                  src={item.img}
                  alt={item.name}
                />
                {/* TEAM NAME */}
                <p className="text-center text-[24px] font-bold mt-4 text-[#2C2C2C]">
                  {item.name}
                </p>
                {/* TEAM POSITION */}
                <p className="text-center text-[#2C2C2C] font-normal">
                  {item.position}
                </p>
                {/* READ MORE BUTTON */}
                <button
                  className="mt-[32px] px-4 py-2 bg-[#0056B3] text-white rounded font-thin w-[220px] hover:opacity-80 duration-300"
                  onClick={() => openModal(item)}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* MEET THE TEAM POP UP */}
          {selectedTeamMember && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
              onClick={closeModal}
            >
              <div
                className="bg-white p-8 rounded-lg shadow-lg max-w-[600px] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* CLOSE BUTTON */}
                <button
                  className="text-[#2C2C2C] hover:text-[#0056B3] text-[40px] float-right"
                  onClick={closeModal}
                >
                  &times;
                </button>
                {/* POP UP IMAGE */}
                <img
                  className="w-[150px] h-[150px] rounded-full mx-auto"
                  src={selectedTeamMember.img}
                  alt={selectedTeamMember.name}
                />
                {/* POP UP NAME */}
                <p className="text-center font-bold text-xl mt-4 underline">
                  {selectedTeamMember.name}
                </p>
                {/* POP UP POSITION */}
                <p className="text-center text-[#2C2C2C] font-normal">
                  {selectedTeamMember.position}
                </p>
                {/* POP UP SHORT BIO */}
                <p className="text-center mt-4 text-gray-600">
                  {selectedTeamMember.bio}
                </p>
              </div>
            </div>
          )}
        </div>
        <hr className="w-full border-t-1 border-[#00D4D4] my-[75px]" />
        {/* END OF MEET THE TEAM */}
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default AboutUs;
