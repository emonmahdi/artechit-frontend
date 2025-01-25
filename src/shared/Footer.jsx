const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="text-gray-300">
              We are an IT institute offering a wide range of training and
              certification programs to help individuals enhance their skills in
              the tech industry.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="/courses" className="hover:text-yellow-500">
                  Courses
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-yellow-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-gray-300">Email: info@itInstitute.com</p>
            <p className="text-gray-300">Phone: +1 (234) 567-890</p>
            <p className="text-gray-300">
              Location: 123 Tech Lane, City, Country
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} IT Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
