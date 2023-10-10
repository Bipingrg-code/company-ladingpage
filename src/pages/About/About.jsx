import { useState } from "react";
import { BsCheck2All } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { whyUsImage, skillsImage } from "../../constants/index";
export function About() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };
  return (
    <section id="about-us" className="h-auto font-sans">
      {/* First Div */}
      <div className="py-8">
        <h1 className="text-center font-bold md:text-4xl text-secondaryDark uppercase">
          <span className="relative">
            About Us
            <hr className="border-b border-secondaryDark border-solid border-tiny mt-2 w-12 mx-auto" />
          </span>
        </h1>
        <div className="flex container  flex-col-reverse md:flex-row mx-auto mt-6 gap-4 text-primaryDark">
          <div className="flex flex-col p-4 md:p-0 md:w-1/2 ">
            <p className="leading-5  md:leading-6 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="mt-4">
              <span className="flex justify-center items-center gap-2 text-sm">
                <BsCheck2All className="w-[26px] h-[26px] text-primaryBlue" />{" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat
              </span>
              <span className="flex justify-center items-center gap-2 text-sm">
                <BsCheck2All className="w-[26px] h-[26px] text-primaryBlue" />{" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat
              </span>
              <span className="flex justify-center items-center gap-2 text-sm">
                <BsCheck2All className="w-[26px] h-[26px] text-primaryBlue" />{" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat
              </span>
            </div>
          </div>
          <div className="flex flex-col p-4 md:p-0 md:w-1/2">
            <p className="leading-5  md:leading-6 text-justify ">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <div className="mt-4 flex justify-start items-start">
              <a
                href="#"
                className="py-2 px-4 text-primaryBlue bg-primaryLight border-2 rounded-sm transform transition-transform duration-600 ease-in-out hover:bg-primaryBlue hover:text-primaryDark"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Second Div */}
      <div className="bg-secondaryLight h-auto py-8">
        <div className="container mt-6 mx-auto flex flex-col-reverse md:flex-row">
          <div className="flex flex-col p-4 md:p-0 md:w-1/2">
            <h3 className="text-2xl leading-none text-secondaryDark sm:mt-4 md:text-4xl max-w-md text-start">
              Eum ipsam laborum delenit
              <span className="text-primaryDark font-bold ml-2">
                velit pariatur architecto
              </span>
            </h3>
            <p className="text-base leading-4 text-justify mt-4 text-secondaryDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              facilis sequi voluptatem corporis ratione minus quae animi minima
              sint voluptas?
            </p>
            {/*  to show/hide the content */}
            <div className="flex flex-col">
              <div
                className="bg-white w-full h-10 border border-primaryBlue flex justify-between gap-2 p-4 mt-4 items-center rounded-md cursor-pointer"
                onClick={() => toggleShow()}
              >
                <span className="text-primaryBlue font-bold">1</span>
                <p className="text-secondaryDark">
                  Lorem ipsum dolor sit amet.
                </p>
                <AiOutlineDown className="text-primaryBlue" />
              </div>
              {show && (
                <div className="mt-4">
                  <p className="text-base leading-4 text-justify mt-4 text-secondaryDark">
                    Answer: Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              )}
              <div
                className="bg-white w-full h-10 border border-primaryBlue flex justify-between gap-2 p-4 mt-4 items-center rounded-md cursor-pointer"
                onClick={() => toggleShow()}
              >
                <span className="text-primaryBlue font-bold">2</span>
                <p className="text-secondaryDark">
                  Lorem ipsum dolor sit amet.
                </p>
                <AiOutlineDown className="text-primaryBlue" />
              </div>
              {show && (
                <div className="mt-4">
                  <p className="text-base leading-4 text-justify mt-4 text-secondaryDark">
                    Answer: Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={whyUsImage} alt="" />
          </div>
        </div>
      </div>
      {/* Third Div */}
      <div className="h-auto py-8">
        <div className="container mx-auto flex flex-col gap-4 mt-4 md:flex-row">
          <div className="md:w-1/2 p-4 md:p-0">
            <img src={skillsImage} alt="hero images" />
          </div>
          <div className="flex flex-col  p-4 md:p-0 md:w-1/2">
            <h3 className="text-primaryDark text-xl text-center p-4 mt-4 font-bold max-w-md md:text-start md:mt-0 md:p-0 md:text-2xl ">
              <span className="relative">
                Why Us.?
                <hr className="border-b border-secondaryDark border-solid border-tiny mt-2 w-full md:w-20" />
              </span>
            </h3>
            <p className="text-primaryDark text-base mt-6 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos nemo eligendi assumenda. Nisi libero enim aperiam
              quos, optio laborum harum consequuntur tenetur impedit suscipit
              at!
            </p>
            <p className="text-primaryDark text-base mt-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos nemo eligendi assumenda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
