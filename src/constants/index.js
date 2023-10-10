import {
  client1,
  client2,
  client3,
  client4,
  client5,
  heroImage,
  whyUsImage,
  skillsImage,
} from "../assets/images";
export { heroImage };
export { whyUsImage };
export { skillsImage };
export const clients = [
  { id: 1, src: client1, alt: "client1" },
  { id: 2, src: client2, alt: "client2" },
  { id: 3, src: client3, alt: "client3" },
  { id: 4, src: client4, alt: "client4" },
  { id: 5, src: client5, alt: "client5" },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#teams", label: "Teams" },
  { href: "#contact-us", label: "Contact Us" },
];

export const servicesData = [
  {
    id:1,
    title: "Web Development",
    description:
      "We create modern and responsive websites tailored to your needs.",
    icon: "🌐",
  },
  {
    id:2,
    title: "Graphic Design",
    description:
      "Our designers craft visually appealing graphics and branding materials.",
    icon: "🎨",
  },
  {id:3,
    title: "Digital Marketing",
    description:
      "We boost your online presence and reach your target audience.",
    icon: "📈",
  },
  {id:4,
    title: "App Development",
    description:
      "Ours exports Developers team will deliver good quality of both android and ios apps.",
    icon: "📈",
  },
];
