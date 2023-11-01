import {IoLocationOutline,IoCall} from 'react-icons/io5';
import {MdOutlineMailOutline} from 'react-icons/md'
export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 bg-secondaryLight font-sams">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Column 1: Company Info */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold">A N I S H A</h2>
            <p className="text-sm py-4">
            123 Main Street, City, Country
              <br />
              Phone: (123) 456-7890
              <br />
              <MdOutlineMailOutline />: info@company.com
            </p>
          </div>

          {/* Column 2: Useful Links */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold">Useful Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h2 className="text-xl font-bold">Service Links</h2>
            <ul>
              <li>
                <a href="#">Service 1</a>
              </li>
              <li>
                <a href="#">Service 2</a>
              </li>
              <li>
                <a href="#">Service 3</a>
              </li>
              <li>
                <a href="#">Service 4</a>
              </li>
              <li>
                <a href="#">Service 5</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h2 className="text-xl font-bold">Social Media</h2>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
