import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const footerLinks = [
  {
    title: "About",
    links: [
      { name: "Contact Us", redirect: "contact" },
      { name: "About Us", redirect: "about" },
      { name: "Careers", redirect: "careers" },
    ]
  },
  {
    title: "Policy",
    links: [
      { name: "Return Policy", redirect: "#" },
      { name: "Terms Of Use", redirect: "#" },
      { name: "Security", redirect: "#" }
    ]
  },
  {
    title: "Social",
    links: [
      { name: "Facebook", redirect: "#" },
      { name: "Instagram", redirect: "#" }
    ]
  }
];

const Footer = () => {
  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"));
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <footer className="mt-20 w-full py-6 px-4 sm:px-12 bg-primary-darkBlue text-white text-sm border-t border-gray-600">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col sm:flex-row w-full sm:w-6/12">
              {footerLinks.map((section, index) => (
                <div className="w-full sm:w-1/3 flex flex-col gap-2 my-3 sm:my-0" key={index}>
                  <h2 className="text-primary-grey mb-2 font-semibold uppercase">{section.title}</h2>
                  {section.links.map((link, linkIndex) => (
                    <Link to={link.redirect} key={linkIndex} className="hover:text-primary-blue transition duration-200">
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row w-full sm:w-6/12">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey mb-2 font-semibold uppercase">Mail Us:</h2>

                <p className="mt-2 leading-5">
                  Siddhi Creatives Private Limited,<br />
                  support@siddhicreatives.com
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey mb-2 font-semibold uppercase">Registered Office Address:</h2>

                <p className="mt-2 leading-5">
                  Siddhi Creatives Private Limited,<br />
                  Govindpura Sanganer,<br />
                  Jaipur, 302029,<br />
                  Rajasthan, India<br />
                  CIN : U51109KA2012PTC066107<br />
                  Telephone: <a className="text-primary-blue" href="tel:18002029898121">1800 202 121</a>
                </p>
              </div>
            </div>
          </div>

          {/* Optional Bottom Links */}
          {/* Uncomment if needed */}
          {/* 
          <div className="px-4 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            <a href="https://seller.siddhicreatives.com/sell-online" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition duration-200">
              Sell On Siddhi Creatives
            </a>
            <span>&copy; 2007-{new Date().getFullYear()} Siddhi Creatives.com</span>
          </div> 
          */}
        </footer>
      )}
    </>
  );
};

export default Footer;