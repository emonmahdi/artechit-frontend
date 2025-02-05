import {
  AiOutlineCloud,
  AiOutlineCode,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  FaShieldAlt,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <AiOutlineCode size={40} />,
    title: "Web Development",
    desc: "Custom websites and web apps with modern technologies.",
  },
  {
    id: 2,
    icon: <AiOutlineCloud size={40} />,
    title: "Cloud Solutions",
    desc: "Deploy and manage applications on cloud infrastructure.",
  },
  {
    id: 3,
    icon: <FaShieldAlt size={40} />,
    title: "Cyber Security",
    desc: "Protect your business with top-tier security solutions.",
  },
  {
    id: 4,
    icon: <FaServer size={40} />,
    title: "Server Management",
    desc: "Reliable server setup and maintenance services.",
  },
  {
    id: 5,
    icon: <FaMobileAlt size={40} />,
    title: "UI/UX Design",
    desc: "Create stunning, user-friendly interfaces.",
  },
  {
    id: 6,
    icon: <FaDatabase size={40} />,
    title: "Database Management",
    desc: "Efficient and scalable database solutions.",
  },
  {
    id: 7,
    icon: <AiOutlineSetting size={40} />,
    title: "IT Consultancy",
    desc: "Expert guidance on IT strategies and implementations.",
  },
  {
    id: 8,
    icon: <FaGlobe size={40} />,
    title: "SEO & Marketing",
    desc: "Boost your online presence with SEO and digital marketing.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
