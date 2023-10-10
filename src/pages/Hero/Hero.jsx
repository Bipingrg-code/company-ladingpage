import { heroImage } from "../../constants";
export function Hero() {
  return (
    <section id="home" className="bg-secondaryDark h-auto">
      <div className="container flex flex-col-reverse md:flex-row items-center p-x-6 mx-auto space-y-0 md:space-y-0">
        {/* left Div */}
        <div className="flex flex-col mb-32 mt-10 space-y-10 md:w-1/2">
          <h1 className="max-w-md text-secondaryLight text-2xl font-bold text-center p-4 md:p-0 md:text-4xl md:text-left">
            Better Solutions For Your Business
          </h1>
          <p className="max-w-sm text-center text-primaryDark md:text-left md:text-xl">
            We are team of talented designers making web development and other
            It products.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="py-3 px-6 text-secondaryLight bg-primaryBlue rounded-full baseline hover:bg-primaryBlue"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* Right div */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <img src={heroImage} alt="hero imag" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
