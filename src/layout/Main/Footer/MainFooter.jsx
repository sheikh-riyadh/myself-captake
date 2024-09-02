import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitch,
  FaDiscord,
} from "react-icons/fa";

const MainFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" bg-stech pt-10">
      <div className="my_container">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row md:items-center  md:justify-between gap-5">
            <div>
              <h2 className="text-lg font-bold underline text-primary">
                Site Links
              </h2>
              <div className="flex flex-col text-white">
                <span>Wishlist</span>
                <span>My Cart</span>
                <span>Accout</span>
                <span>Channel</span>
              </div>
            </div>
            <div className="flex flex-col lg:items-center gap-5">
              <img
                className="w-36"
                src="https://www.startech.com.bd/image/catalog/logo.png"
                alt="logo"
              />
              <div className="flex lg:items-center lg:justify-center gap-5 text-2xl text-white">
                <FaFacebook />
                <FaTwitter />
                <FaYoutube />
                <FaInstagram />
                <FaTwitch />
                <FaDiscord />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold underline text-primary">
                Contact
              </h2>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-white">
                  <FaMapMarkerAlt />
                  <span>Dhaka postogola 1204</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <FaEnvelope />
                  <span>captake@gmail.com</span>
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
