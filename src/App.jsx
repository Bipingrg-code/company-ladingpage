import { Footer } from "./components/Footer/Footer";
import { Headers } from "./components/Headers/Headers";
import { About, Hero, Customers, Service, Teams, Contact } from "./pages";
export default function App() {
  return (
    <>
      <Headers />
      <Hero />
      <Customers />
      <About />
      <Service />
      <Teams />
      <Contact />
      <Footer />
    </>
  );
}
