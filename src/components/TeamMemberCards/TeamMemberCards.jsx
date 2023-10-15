import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export function TeamMembersCards({
  name,
  title,
  src,
  alt,
  description,
  socialLinks,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md flex">
      <div className="w-1/3 p-4">
        <img src={src} alt={alt} className="w-full h-auto rounded-lg" />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-xl font-semibold text-primaryBlue">{name}</h2>
        <p className="text-gray-600 text-sm text-secondaryDark">{title}</p>
        <p className="text-gray-700 my-4 text-sm text-primaryDark text-start">{description}</p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link}
              className="text-secondaryDark hover:text-primaryBlue"
            >
              {index === 0 ? (
                <FaFacebook />
              ) : index === 1 ? (
                <FaInstagram />
              ) : index === 2 ? (
                <FaTwitter />
              ) : (
                <FaLinkedin />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TeamMembersCards