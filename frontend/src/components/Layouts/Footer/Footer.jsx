import React, { useEffect, useState } from 'react'; // Import React
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "contact",
      },
      {
        name: "About Us",
        redirect: "about",
      },
      {
        name: "Careers",
        redirect: "careers",
      },
    ]
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        redirect: "#",
      },
      {
        name: "Terms Of Use",
        redirect: "#",
      },
      {
        name: "Security",
        redirect: "#",
      }
    ]
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "#",
      },
      {
        name: "Instagram",
        redirect: "#",
      }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-6/12 flex flex-col sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-1/3 flex flex-col gap-2 my-3 sm:my-6 ml-5" key={i}>
                  <h2 className="text-primary-grey mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect}  rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}

            </div>

            <div className="w-full sm:w-5/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Mail Us:</h2>
                <p className="mt-2 leading-5">Siddhi Ceatives Private Limited,<br />
                  support@siddhicreatives.com
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Registered Office Address:</h2>
                <p className="mt-2 leading-5">Siddhi Ceatives Private Limited,<br />
                  Govindpura Sanganer &<br />
                  Jaipur, 302029,<br />
                  Rajasthan, India
                  CIN : U51109KA2012PTC066107<br />
                  Telephone: <a className="text-primary-blue" href="tel:18002029898121">1800 202 121</a>
                </p>
              </div>
            </div>

          </footer>
          {/* <!-- footer ends --> */}

          {/* <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
            <a href="https://seller.Siddhi Ceativeseativeseatives.com/sell-online" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><WorkIcon sx={{ fontSize: "20px" }} /></span> Sell On Siddhi Ceativeseativeseatives
            </a>
            <a href="https://brands.Siddhi Ceativeseatives.com" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><StarsIcon sx={{ fontSize: "20px" }} /></span> Advertise
            </a>
            <a href="https://www.Siddhi Ceatives.com/the-gift-card-store" rel="noreferrer" target="_blank" className="flex items-center gap-2">
              <span className="text-yellow-400"><CardGiftcardIcon sx={{ fontSize: "20px" }} /></span> Gift Cards
            </a>
            <a href="https://www.Siddhi Ceatives.com/helpcentre" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span className="text-yellow-400"><HelpIcon sx={{ fontSize: "20px" }} /></span> Help Center
            </a>

            <span>&copy; 2007-{new Date().getFullYear()} Siddhi Ceatives.com</span>
            <img draggable="false" src={paymentMethods} alt="Card Payment" />
          </div> */}
        </>
      )}
    </>
  )
};

export default Footer;
