import {
  client1,
  client2,
  client3,
  client4,
  client5,
  heroImage,
  whyUsImage,
  skillsImage,
  webIcon,
  designIcon,
  analysisIcon,
  appIcon,
  team1Images,
  team2Images,
  team3Images,
  team4Images,
} from "../assets";
export { heroImage };
export { whyUsImage };
export { skillsImage };

export { webIcon, designIcon, analysisIcon, appIcon };

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
    id: 1,
    title: "Web Development",
    description:
      "We create modern and responsive websites tailored to your needs.",
    iconUrl: webIcon,
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Our designers craft visually appealing graphics and branding materials.",
    iconUrl: designIcon,
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "We boost your online presence and reach your target audience.",
    iconUrl: analysisIcon,
  },
  {
    id: 4,
    title: "App Development",
    description:
      "Ours exports Developers team will deliver good quality of both android and ios apps.",
    iconUrl: appIcon,
  },
];

export const teamsData = [
  {
    id: 1,
    src: team1Images,
    alt: "team1",
    description: "Lorem Ipsum is simply dummy text of the printing",
    name: "Bipin",
    socialLinks: [
      { faceBook: "https://www.facebook.com/" },
      { instagram: "https://www.instagram.com/" },
      { twitter: "https://twitter.com/" },
      { linkdin: "https://www.linkedin.com/" },
    ],
    title: "CEO",
  },
  {
    id: 2,
    src: team2Images,
    alt: "team2",
    description: "Lorem Ipsum is simply dummy text of the printing",
    name: "Bipin",
    socialLinks: [
      { faceBook: "https://www.facebook.com/" },
      { instagram: "https://www.instagram.com/" },
      { twitter: "https://twitter.com/" },
      { linkdin: "https://www.linkedin.com/" },
    ],
    title: "HR Manager",
  },
  {
    id: 3,
    src: team3Images,
    alt: "team3",
    description: "Lorem Ipsum is simply dummy text of the printing",
    name: "Bipin",
    socialLinks: [
      { faceBook: "https://www.facebook.com/" },
      { instagram: "https://www.instagram.com/" },
      { twitter: "https://twitter.com/" },
      { linkdin: "https://www.linkedin.com/" },
    ],
    title: "Marketing Head",
  },
  {
    id: 4,
    src: team4Images,
    alt: "team4",
    description: "Lorem Ipsum is simply dummy text of the printing",
    name: "Bipin",
    socialLinks: [
      { faceBook: "https://www.facebook.com/" },
      { instagram: "https://www.instagram.com/" },
      { twitter: "https://twitter.com/" },
      { linkdin: "https://www.linkedin.com/" },
    ],
    title: "Accountant",
  },
];
