import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-white">
    <div className="max-w-4xl w-full  space-y-8 p-10 bg-white rounded-xl shadow-md dark:bg-slate-900 dark:text-white ">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:bg-slate-900 dark:text-white">About Us</h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:bg-slate-900 dark:text-white">
          Learn more about our company and our mission.
        </p>
      </div>
      <div className="mt-8 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:bg-slate-900 dark:text-white">Our Mission</h3>
          <p className="mt-2 text-gray-600 dark:bg-slate-900 dark:text-white">
            Our mission is to provide the best services to our customers with utmost integrity and dedication. We strive to exceed expectations and constantly improve our processes to serve our clients better.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:bg-slate-900 dark:text-white">Who We Are</h3>
          <p className="mt-2 text-gray-600 dark:bg-slate-900 dark:text-white">
            We are a team of passionate professionals committed to delivering excellence. With years of experience in the industry, we bring a wealth of knowledge and expertise to every project we undertake.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Our Values</h3>
          <p className="mt-2 text-gray-600 dark:bg-slate-900 dark:text-white">
            We believe in integrity, innovation, and customer satisfaction. Our core values drive everything we do and are the foundation of our company culture. We are dedicated to maintaining the highest standards of quality and ethics in all our operations.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600 dark:bg-slate-900 dark:text-white">
            <li>Integrity: We conduct our business with honesty and transparency.</li>
            <li>Innovation: We embrace new ideas and technologies to improve our services.</li>
            <li>Customer Satisfaction: We prioritize our customers' needs and strive to exceed their expectations.</li>
            <li>Teamwork: We work together to achieve common goals and support each other in our endeavors.</li>
            <li>Excellence: We are committed to delivering the highest quality in everything we do.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer /></>
    
  );
}

export default About;
