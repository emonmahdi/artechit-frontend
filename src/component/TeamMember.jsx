import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    image: "https://rb.gy/l4on42",
    details:
      "John is a frontend developer with 5 years of experience in React and web design.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }  
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Backend Developer",
    image: "https://rb.gy/l4on42",
    details:
      "Jane specializes in server-side programming, databases, and cloud architecture.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
  },
  {
    id: 3,
    name: "Samuel Lee",
    role: "Designer",
    image: "https://rb.gy/l4on42",
    details:
      "Samuel is an expert in UI/UX design and has a passion for creating user-friendly interfaces.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
  },
  {
    id: 4,
    name: "Anna Turner",
    role: "Project Manager",
    image: "https://rb.gy/l4on42",
    details:
      "Anna ensures smooth project delivery, managing teams and clients to keep projects on track.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
  },
];

const TeamMember = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl text-center font-semibold mb-8">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers?.map((member) => {
          const { name, role, details } = member;
          return (
            <div className="relative group overflow-hidden rounded-lg shadow-lg transition-all transform hover:scale-105 p-4">
              {/* <h4>{name}</h4>
              <h4>{role}</h4>
              <h4>{details}</h4> */}
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className=" rounded-full mx-auto h-56 object-cover "
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className=" text-md">{member.role}</p>
              </div>
              <div className="absolute inset-0 bg-[#2F50A0] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#ED2024] to-transparent p-4">
                <h3 className="text-white text-xl font-bold">{member.name}</h3>
                <p className="text-white text-md">{member.role}</p>
                <p className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.details}
                  </p>
                  {/* Social Icons Section */}
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-500 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMember;
