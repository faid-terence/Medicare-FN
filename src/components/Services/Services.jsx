import { ServiceList } from "./ServiceList";

export const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Medical Services</h2>
          <p className="text_para text-center">World-class care for everyone. Our health System Offers unmatched, expert health care.</p>
        </div>
        <ServiceList />
      </div>
    </section>
  );
};
