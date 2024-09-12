import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import StrategyImage from "../assets/images/svg/design-thinking.svg";
import departmentImage from "../assets/images/svg/coding.svg";
import launchImage from "../assets/images/svg/office-desk.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PiSolarRoof } from "react-icons/pi";
import { FaHammer, FaTools } from "react-icons/fa";
import { LiaBinocularsSolid } from "react-icons/lia";
import { IoIosWater } from "react-icons/io";
import { TbStorm } from "react-icons/tb";
import { IoTerminalSharp } from "react-icons/io5";

export default function Services() {
  const team = [
    {
      title: 'Roof Installation',
      icon: <PiSolarRoof />,
      subtext: 'Expert roof installations with durable materials, ensuring long-lasting protection for your home.'
    },
    {
      title: 'Roof Repairs',
      icon: <FaHammer />,
      subtext: 'Professional repairs to fix leaks, damages, and wear, restoring the integrity of your roof.'
    },
    {
      title: 'Roof Inspection',
      icon: <LiaBinocularsSolid />,
      subtext: 'Thorough inspections to assess the condition of your roof and prevent costly future damage.'
    },
    {
      title: 'Gutter Installation & Repair',
      icon: <IoIosWater />,
      subtext: 'Protect your home with efficient gutter systems that prevent water damage and ensure proper drainage.'
    },
    {
      title: 'Storm Damage Restoration',
      icon: <TbStorm />,
      subtext: 'Quick response and restoration services for roofs damaged by storms and extreme weather conditions.'
    },
    {
      title: 'Roof Maintenance',
      icon: <FaTools />,
      subtext: 'Regular maintenance services to extend the life of your roof and keep it in optimal condition.'
    }
  ];


  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      {/* Start */}
      <section className="relative md:py-24 py-16 active" id="features">
        <div className="container lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
            <div data-aos="fade-right">
              <h6 className="text-orange-600 text-base font-medium uppercase mb-2">What We Do ?</h6>
              <h3 className="mb-4 md:text-2xl text-xl font-semibold dark:text-white md:mb-0">Perfect Solution For Your <br /> Business</h3>
            </div>

            <div data-aos="fade-left">
              <p className="text-slate-400 dark:text-slate-300 max-w-xl">At Roof Flex, we specialize in top-tier roofing services, including repairs, installations, and maintenance.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">

            {team.map((item, key) => (
              <div key={key} className={`features p-6 ${key % 2 === 0 ? "hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800" : "shadow-xl shadow-slate-100 dark:shadow-slate-800"} transition duration-500 rounded-3xl mt-8`} data-aos="fade-up">
                <div className="w-20 h-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                  {/* <i className={`uil uil-${item.icon}`}></i> */}
                  {item.icon}
                </div>

                <div className="content mt-7">
                  <Link to="#" className="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium">{item.title}</Link>
                  <p className="text-slate-400 mt-3">{item.subtext}</p>

                  <div className="mt-5">
                    <Link to="#" className="btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500">Read More <i className="uil uil-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center" data-aos="zoom-in">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Work Process</h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Our Roofing Service Process</h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
              From inspection to installation, we ensure a seamless roofing experience, protecting your home with top-quality materials and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-8">
            <div className="timeline relative">
              <div className="timeline-item">
                <div className="grid sm:grid-cols-2">
                  <div className="" data-aos="fade-right">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <img src={StrategyImage} className="h-64 w-64" alt="Roof Inspection" />
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0" data-aos="fade-left">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Roof Inspection</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        Our experts conduct a thorough inspection to assess your roof's condition, identifying any potential issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2" data-aos="fade-right">
                    <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Roof Repair/Replacement</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        We repair minor damages or replace your roof with high-quality materials to ensure lasting protection.
                      </p>
                    </div>
                  </div>
                  <div className="md:order-2 order-1" data-aos="fade-left">
                    <div className="duration duration-right md:ms-7 relative">
                      <img src={departmentImage} className="h-64 w-64" alt="Roof Repair/Replacement" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="mt-4 mt-sm-0" data-aos="fade-right">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <img src={launchImage} className="h-64 w-64" alt="Project Completion" />
                    </div>
                  </div>
                  <div className="mt-4 mt-sm-0" data-aos="fade-left">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Final Inspection & Completion</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        After the work is done, we perform a final inspection to ensure your roof is perfect and ready to protect your home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );

}
