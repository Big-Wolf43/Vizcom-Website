import React from "react";
import MessengerIcon from "./icons/messenger-icon.png";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import BPOServices from "./pages/BPO-Services";
import ITServices from "./pages/IT-Services";
import SaaSProduct from "./pages/Saas-Product";
import ContactUs from "./pages/Contact-us";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-roboto relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/bpo-services" element={<BPOServices />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/saas-product" element={<SaaSProduct />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <div className="top-[90%] right-4 fixed">
          <a
            href="https://www.messenger.com/t/104020129158780/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0"
            target="_blank"
          >
            <button
              className="p-[20px] rounded-full text-black bg-blue-200 shadow-lg hover:scale-110 duration-300"
              title="Message us on Messenger"
            >
              <img src={MessengerIcon} alt="" />
            </button>
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
