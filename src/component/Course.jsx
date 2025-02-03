import React from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Course = ({ course }) => {
  const { title, desc, price, img, rating, classes, mentor } = course;
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="flex justify-between items-center">
        <Link to={'/'}><h3 className="text-lg font-semibold text-[#2F50A0]">{title}</h3></Link>
        <h6 className="text-md font-semibold text-gray-800">Price: <span className="text-orange-500">{price}৳</span></h6>
      </div>
      <p className="text-sm font-bold text-gray-600 mt-2">Mentor: {mentor}</p>
      <p className="text-sm font-bold text-gray-600 mt-2">Classes: {classes}</p>

      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{"★".repeat(rating)}</span>
        <span className="text-gray-500 ml-2">({rating})</span>
      </div>
      <div className="my-4">
        <Link to={"/"}>
          <Button children={"View Details"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
