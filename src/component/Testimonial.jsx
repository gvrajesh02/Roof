import React, { useEffect } from "react";
import TinySlider from "tiny-slider-react";

import avatar1 from "../assets/images/client/01.jpg";
import avatar2 from "../assets/images/client/02.jpg";
import avatar3 from "../assets/images/client/03.jpg";
import avatar4 from "../assets/images/client/04.jpg";

import 'tiny-slider/dist/tiny-slider.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const settings = {
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    gutter: 0,
    responsive: {

        768: {
            items: 2
        }
    },
};
export default function Review() {
    const review = [
        {
            id: '1',
            profile: avatar1,
            name: 'Calvin Carlo',
            designation: "Manager",
            description: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise."
        },
        {
            id: '2',
            profile: avatar2,
            name: 'Christa Smith',
            designation: "Manager",
            description: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise."
        }, {
            id: '3',
            profile: avatar3,
            name: 'Jemina CLone',
            designation: "Manager",
            description: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise."
        }, {
            id: '4',
            profile: avatar4,
            name: 'Smith Vodka',
            designation: "Manager",
            description: "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero Launch your campaign and benefit from our expertise."
        }
    ]

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
            {/* Review Start  */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="testi">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center" data-aos="zoom-in">
                        <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Testimonial</h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Client's Review</h3>

                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
                    </div>

                    <div className="grid grid-cols-1 mt-8 relative">
                        <div className="tiny-two-item">
                            <TinySlider settings={settings} >
                                {review.map((el, index) => (
                                    <div className="tiny-slide" key={index} data-aos="fade-up"
                                    data-aos-duration="3000">
                                        <div className="lg:flex p-6 lg:p-0 relative rounded-md shadow shadow-slate-200 dark:shadow-slate-700 bg-white dark:bg-slate-900 overflow-hidden m-2">
                                            <img className="w-24 h-24 lg:w-48 lg:h-auto lg:rounded-none rounded-full mx-auto" src={el.profile} alt="" width="384" height="512" />
                                            <div className="pt-6 lg:p-6 text-center lg:text-left space-y-4">
                                                <p className="text-base text-slate-500 dark:text-slate-200"> " It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. " </p>

                                                <div>
                                                    <span className="text-orange-600 block mb-1">{el.name}</span>
                                                    <span className="text-slate-400 text-sm dark:text-white/60 block">{el.designation}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}



