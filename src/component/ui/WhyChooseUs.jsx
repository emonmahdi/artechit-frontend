import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import SectionTitle from './SectionTitle'

const WhyChooseUs = () => {
  return (
    <>
    <SectionTitle title={'Why Choose Us'} />
    
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6">
      {/* Left side - Image with Black Opacity Background and Centered Text */}
      <div className="flex-1 mb-8 md:mb-0 relative">
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <img
          src="https://rb.gy/qd1v06" // Use your image URL here
          alt="ARTECH IT"
          className="w-full h-auto rounded-lg object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl z-10">
          ARTECH IT
        </div>
      </div>


      {/* Right side - Text Content with Icons */}
      <div className="flex-1 text-center md:text-left px-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose ARTECH IT?</h2>
        <p className="text-lg text-gray-600 mb-6">
          ARTECH IT provides cutting-edge technology solutions with an emphasis on innovation and customer satisfaction. With our highly skilled team, we strive to deliver services that are efficient, effective, and customized to meet your needs.
        </p>
        <ul className="list-none space-y-4 text-gray-600">
          <li className="flex items-center space-x-3">
            <FaCheckCircle className="text-green-500" />
            <span>Expert team with years of experience</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaCheckCircle className="text-green-500" />
            <span>Tailored solutions for every business need</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaCheckCircle className="text-green-500" />
            <span>24/7 customer support and assistance</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaCheckCircle className="text-green-500" />
            <span>Proven track record of successful projects</span>
          </li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default WhyChooseUs