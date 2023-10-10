import { Headers } from "./components/Headers/Headers";
import { About, Hero, Customers, Service, Teams } from "./pages";
export default function App() {
  return (
    <>
      <Headers />
      <Hero />
      <Customers />
      <About />
      <Service />
      <Teams />
    </>
  );
}
