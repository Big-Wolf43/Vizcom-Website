// ICONS AND IMAGES IMPORT
import VizcomName from "../icons/VizcomName2.png";

const Footer: React.FC = () => {
  // QUICK LINKS DATA
  const quickLinks = [
    { name: "Homepage", href: "/" },
    { name: "About us", href: "/about-us" },
    { name: "BPO Services", href: "/bpo-services" },
    { name: "IT Services", href: "/it-services" },
    { name: "Contact us", href: "/contact-us" },
    { name: "SAAS Product", href: "/saas-product" },
  ];

  // SOCIAL MEDIA DATA
  const socialMedia = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100086389816868",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/vizcomcorporation/?igsh=bnFhM3ZzMDBwOHA0",
    },
    { name: "Twitter", href: "https://twitter.com/VizcomCorp" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/vizcom-corp/" },
  ];

  // SERVICES DATA
  const services = [
    { name: "BPO Services", href: "/bpo-services" },
    { name: "IT Services", href: "/it-services" },
  ];

  return (
    <div className="bg-[#2C2C2C] p-[20px]">
      {/* VIZCOM NAME IMAGE */}
      <div className="flex">
        <img className="h-[80px]" src={VizcomName} alt="Vizcom Logo" />
      </div>
      {/* VIZCOM TAGLINE */}
      <p className="text-white font-semibold italic text-[24px]">
        Discovering boundless opportunities!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mt-[56px] max-w-[1280px] mx-auto items-start">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-[20px] mb-4">Quick Links</h1>
          {quickLinks.map((link, index) => (
            <p className="py-1" key={index}>
              <a
                href={link.href}
                className="text-white hover:text-gray-400 duration-300 transition"
              >
                {link.name}
              </a>
            </p>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-[20px] mb-4">
            Follow us on Social Media
          </h1>
          {socialMedia.map((social, index) => (
            <p className="py-1" key={index}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 duration-300 transition"
              >
                {social.name}
              </a>
            </p>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-white font-bold text-[20px] mb-4">Services</h1>
          {services.map((service, index) => (
            <p className="py-1" key={index}>
              <a
                href={service.href}
                className="text-white hover:text-gray-400 duration-300  transition"
              >
                {service.name}
              </a>
            </p>
          ))}
        </div>
      </div>
      <hr className="w-full border-t-1  my-[25px] border-[#00D4D4]" />
      <p className="text-center text-white mb-[12px]">
        2024 Vizcom Corporation. All right Reserved
      </p>
    </div>
  );
};

export default Footer;
