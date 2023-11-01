import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server or perform actions
    //console.log(formData);
  };
  return (
    <section id="contact" className="h-auto font-sans relative">
      <div className="py-8">
        <h1 className="text-center font-bold md:text-4xl text-secondaryDark uppercase">
          <span className="relative">
           Contact Us
            <hr className="border-b border-secondaryDark border-solid border-tiny mt-2 w-12 mx-auto" />
          </span>
        </h1>
        <div className="w-full max-w-md mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-primaryDark leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-primaryDark leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-primaryDark text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-primaryDark leading-tight focus:outline-none focus:shadow-outline h-32"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="py-2 px-6 text-secondaryLight bg-primaryBlue rounded-md baseline hover:bg-primaryBlue"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact