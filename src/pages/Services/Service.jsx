import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import {servicesData} from "../../constants/index"

export function Service() {
  return (
    <section id="services" className="bg-secondaryLight h-auto font-sans">
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
           {servicesData.map((service)=>(
            <ServiceCard key={service.id} {...service}/>
           ))}
          </div>
        </div>
      </div>
    </section>
  );
}
