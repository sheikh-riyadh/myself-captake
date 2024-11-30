import {
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MainFooter = () => {
  const year = new Date().getFullYear();

  const links = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/sheikhriyadhofficial/",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/sheikh-riyadh/",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@codersheikh8040",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/sheikh-riyadh",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/01919195934",
    },
  ];

  return (
    <footer className=" bg-widget pt-10 mb-[68px] xl:mb-0">
      <div className="my_container">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:items-center  md:justify-between gap-5">
            <div>
              <h2 className="text-lg font-bold underline text-accent">
                Site Links
              </h2>
              <div className="flex flex-col text-white">
                <Link to="/wishlist">
                  <span>Wishlist</span>
                </Link>
                <Link to="/cart">
                  <span>My Cart</span>
                </Link>
                <Link to="/dashboard">
                  <span>Accout</span>
                </Link>{" "}
                <Link to="/">
                  <span>Channel</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:items-center gap-5">
              <img className="w-36" src="/logo.png" alt="logo" />
              <div className="flex lg:items-center lg:justify-center gap-5 text-2xl text-white">
                {links?.map(({ link, icon }) => (
                  <a target="_blank" href={link} key={link}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold underline text-accent">
                Contact
              </h2>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-white">
                  <FaMapMarkerAlt />
                  <span>Dhaka postogola 1204</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <FaEnvelope />
                  <span>sheikhriyadh934@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <FaPhoneAlt />
                  <span>+8801919195934</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr />
            <div className="flex flex-wrap items-center justify-between py-2">
              <p className="text-white text-sm py-1">
                {`Copyright ©${year} Captake | All Rights Reserved`}
              </p>
              <p className="text-white text-sm py-1">
                Elite Author on Captake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
