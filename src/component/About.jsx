import React, { useEffect, useState } from "react";
import { Link as Link2 } from "react-router-dom";

import AboutImage from "../assets/images/about.jpg";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, [3000])

  return (
    <>
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="relative">
                <img src={AboutImage} className="rounded-lg shadow-lg relative" alt="" />
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <Link2 to="#" onClick={() => setOpen(true)} className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600">
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </Link2>
                </div>
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="lg:ms-7">
                <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Who We Are ?</h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Our Company Story</h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                  Founded with a passion for providing reliable and durable roofing solutions, Roof Flex began as a small, family-run business committed to delivering exceptional craftsmanship and customer service. Over the years, we've grown into a trusted name in the roofing industry, known for our attention to detail, use of high-quality materials, and dedication to our clients' needs.
                </p>
                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">

                  What started as a vision to provide homeowners with peace of mind has expanded into a company that serves countless families and businesses, ensuring their roofs stand strong through all weather conditions. We believe in building lasting relationships with our clients by offering transparency, integrity, and a personalized approach to every project.
                </p>
                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                  At Roof Flex, we treat each roof as if it's our own, and our team of skilled professionals works tirelessly to protect your most valuable investment—your home.
                </p>

                <div className="relative mt-10">
                  <a href="#portfolio" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">View Portfolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End --> */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="yba7hPeTSjk"
        onClose={() => setOpen(false)}
      />
    </>
  );

}

