import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-10 bg-secondaryLight font-sams">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Column 1: Company Info */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-bold text-primaryDark">
                A N I S H A
              </h2>
              <p className="text-sm py-4 text-primaryDark">
                123 Main Street, City, Country
                <br />
                <span className="flex items-center font-bold">
                  {" "}
                  <IoCall />: (123) 456-7890
                </span>
                <span className="flex items-center font-bold">
                  {" "}
                  <MdOutlineMailOutline />: info@company.com
                </span>
              </p>
            </div>

            {/* Column 2: Useful Links */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-bold text-primaryDark">
                Useful Links
              </h2>
              <ul className="text-sm mt-3 text-primaryDark">
                <li className="flex gap-2 justify-start items-center hover:text-base hover:text-primaryBlue">
                  <MdKeyboardArrowRight className="text-primaryBlue" />
                  <a href="#">Home</a>
                </li>

                <li className="flex gap-2 justify-start items-center hover:text-base hover:text-primaryBlue">
                  {" "}
                  <MdKeyboardArrowRight className="text-primaryBlue" />
                  <a href="#">About Us</a>
                </li>

                <li className="flex gap-2 justify-start items-center hover:text-base hover:text-primaryBlue">
                  {" "}
                  <MdKeyboardArrowRight className="text-primaryBlue" />
                  <a href="#">Services</a>
                </li>

                <li className="flex gap-2 justify-start items-center hover:text-base hover:text-primaryBlue">
                  {" "}
                  <MdKeyboardArrowRight className="text-primaryBlue" />
                  <a href="#">Blog</a>
                </li>

                <li className="flex gap-2 justify-start items-center hover:text-base hover:text-primaryBlue">
                  {" "}
                  <MdKeyboardArrowRight className="text-primaryBlue" />
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h2 className="text-xl font-bold text-primaryDark">
                Service Links
              </h2>
              <ul className="text-sm mt-3 text-primaryDark">
                <li className="flex gap-2 justify-start items-center hover:text-base hover:text-primaryBlue">
                  <MdKeyboardArrowRight className="text-primaryBlue" />
                  <a href="#">Service 1</a>
                </li>
                <li className="flex gap-2 justify-start items-center hover:text-base hover:text-primaryBlue">
                  <MdKeyboardArrowRight className="text-primaryBlue" />
                  <a href="#">Service 2</a>
                </li>
                <li className="flex gap-2 justify-start items-center hover:text-base hover:text-primaryBlue">
                  <MdKeyboardArrowRight className="text-primaryBlue" />
                  <a href="#">Service 3</a>
                </li>
                <li className="flex gap-2 justify-start items-center hover:text-base hover:text-primaryBlue">
                  <MdKeyboardArrowRight className="text-primaryBlue" />
                  <a href="#">Service 4</a>
                </li>
                <li className="flex gap-2 justify-start items-center hover:text-base hover:text-primaryBlue">
                  <MdKeyboardArrowRight className="text-primaryBlue" />
                  <a href="#">Service 5</a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h2 className="text-xl font-bold text-primaryDark">
                Social Networks
              </h2>
              <p className="text-sm text-primaryDark mt-3">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <ul className="text-sm mt-3 text-primaryDark flex gap-4">
                <a
                  href="#"
                  className="text-xl hover:text-primaryBlue hover:text-2xl"
                >
                  <BsFacebook />
                </a>
                <a
                  href="#"
                  className="text-xl hover:text-primaryBlue hover:text-2xl"
                >
                  <BsYoutube />
                </a>
                <a
                  href="#"
                  className="text-xl hover:text-primaryBlue hover:text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-xl hover:text-primaryBlue hover:text-2xl"
                >
                  <FaTwitter />
                </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="h-10 bg-primaryDark">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2 text-primaryLight text-base">
            <h3>Terms&Condition</h3>
            <h3>&copy;All Right Reserved Nepal 2024</h3>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
