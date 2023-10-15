import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { servicesData } from "../../constants/index";

export function Service() {
  return (
    <section id="services" className="bg-secondaryLight h-auto font-sans relative">
      <div className="py-8">
        <h1 className="text-center font-bold md:text-4xl text-secondaryDark uppercase">
          <span className="relative">
            Services
            <hr className="border-b border-secondaryDark border-solid border-tiny mt-2 w-12 mx-auto" />
          </span>
        </h1>
        <div className="container mx-auto mt-4 flex flex-col gap-4">
          <div className="p-4 md:p-0">
            <p className="text-primaryDark text-justify tracking-wider">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          {/* Service cards */}
          <div className="p-4 md:p-0 flex flex-col md:flex-row gap-4">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </div>
      {/* call to action */}
      <div className="relative h-60 overflow-hidden">
        {/* Background Image */}
    
        {/* CTA Content */}
        <div className="container mx-auto flex flex-col justify-center items-center gap-4 z-30 p-10">
          {/* Your CTA content goes here */}
          <h2 className="text-2xl text-primaryBlue font-semibold">
            Call to Action
          </h2>
          <p className="text-secondaryDark">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            suscipit..
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
      </div>
    </section>
  );
}
export default Service