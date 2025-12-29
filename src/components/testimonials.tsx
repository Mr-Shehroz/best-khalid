'use client';

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Testimonial data
const testimonialsData = [
  {
    name: "Jessica H.",
    role: "Mother of two & Teacher",
    quote: "“Finally something that actually works with toddlers!”",
    image: "/testi-1.png",
    stars: "/stars.png",
  },
  {
    name: "Michael R.",
    role: "Pediatric Dentist",
    quote: "“My patients’ parents love the simplicity and results.”",
    image: "/testi-1.png",
    stars: "/stars.png",
  },
  {
    name: "Amanda L.",
    role: "Daycare Owner",
    quote: "“Reduced meltdowns during transitions by 80%.”",
    image: "/testi-1.png",
    stars: "/stars.png",
  },
  {
    name: "David K.",
    role: "Clinic Manager",
    quote: "“Easy onboarding for our entire staff.”",
    image: "/testi-1.png",
    stars: "/stars.png",
  },
  {
    name: "Sarah T.",
    role: "Speech Therapist",
    quote: "“Engages kids better than any app we’ve tried.”",
    image: "/testi-1.png",
    stars: "/stars.png",
  },
  {
    name: "Jessica H.",
    role: "Mother of two & Teacher",
    quote: "“Finally something that actually works with toddlers!”",
    image: "/testi-1.png",
    stars: "/stars.png",
  },
  {
    name: "Michael R.",
    role: "Pediatric Dentist",
    quote: "“My patients’ parents love the simplicity and results.”",
    image: "/testi-1.png",
    stars: "/stars.png",
  },
  {
    name: "Amanda L.",
    role: "Daycare Owner",
    quote: "“Reduced meltdowns during transitions by 80%.”",
    image: "/testi-1.png",
    stars: "/stars.png",
  },
  {
    name: "David K.",
    role: "Clinic Manager",
    quote: "“Easy onboarding for our entire staff.”",
    image: "/testi-1.png",
    stars: "/stars.png",
  },
  {
    name: "Sarah T.",
    role: "Speech Therapist",
    quote: "“Engages kids better than any app we’ve tried.”",
    image: "/testi-1.png",
    stars: "/stars.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getSlideBackground = (idx: number) => {
    const normalizedIdx = idx % 5; // Since testimonials repeat
    const normalizedActive = activeIndex % 5;
    
    // Calculate adjacent indices (left and right of active)
    const leftIdx = (normalizedActive - 1 + 5) % 5;
    const rightIdx = (normalizedActive + 1) % 5;
    
    // Active slide and its immediate neighbors get white background
    if (normalizedIdx === normalizedActive || normalizedIdx === leftIdx || normalizedIdx === rightIdx) {
      return 'white';
    }
    
    // Determine if slide is on the left or right side of active
    // For slides on the right side, reverse the gradient direction
    let distance = normalizedIdx - normalizedActive;
    if (distance < -2) distance += 5; // Handle wrap-around
    if (distance > 2) distance -= 5;
    
    if (distance > 0) {
      // Right side - reverse gradient (90deg instead of 270deg)
      return 'linear-gradient(90deg, rgba(120, 120, 120, 0.4) 0%, rgba(80, 80, 80, 0) 29.82%)';
    } else {
      // Left side - normal gradient
      return 'linear-gradient(270deg, rgba(120, 120, 120, 0.4) 0%, rgba(80, 80, 80, 0) 29.82%)';
    }
  };

  const isContentVisible = (idx: number) => {
    const normalizedIdx = idx % 5;
    const normalizedActive = activeIndex % 5;
    const leftIdx = (normalizedActive - 1 + 5) % 5;
    const rightIdx = (normalizedActive + 1) % 5;
    
    // Only show content for active slide and its neighbors
    return normalizedIdx === normalizedActive || normalizedIdx === leftIdx || normalizedIdx === rightIdx;
  };

  return (
    <section className="bg-[#171717] py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1390px] mx-auto px-4 xl:px-10">
        <div className="text-center max-w-[992px] mx-auto z-40 relative mb-12">
          <h5 className="font-bricolage font-normal text-[28px] tracking-[-0.07em] capitalize text-white">
            <span className="text-[40px]">[</span> Social Proof{" "}
            <span className="text-[40px]">]</span>
          </h5>
          <h3 className="mt-4 font-bricolage font-bold text-[48px] tracking-[-0.03em] leading-[123%] capitalize text-white">
            Trusted by Growing{" "}
            <span className="text-[#FFFFFF38] font-tartuffo font-thin tracking-[0.01em]">
              Healthcare Practices
            </span>
          </h3>
        </div>

        {/* Swiper Wrapper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 36,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 40,
            },
            1536: {
              slidesPerView: 2.8,
              spaceBetween: 44,
            },
          }}
          className="!pb-10 !overflow-visible"
        >
          {testimonialsData.map((item, idx) => (
            <SwiperSlide key={idx} className="!flex !justify-center">
              <div 
                className="w-full max-w-[442px] h-[211px] rounded-[20px] flex flex-col justify-center px-6 md:px-8.5 testimonial-card transition-all duration-300"
                style={{
                  background: getSlideBackground(idx)
                }}
              >
                {isContentVisible(idx) && (
                  <>
                    <div className="flex items-center gap-3.5">
                      <Image
                        src={item.image}
                        height={100}
                        width={100}
                        alt={item.name}
                        className="w-[76px] h-auto rounded-full object-cover"
                      />
                      <div>
                        <h5 className="font-bricolage font-bold text-[20px] md:text-[24px] leading-[123%] tracking-[-0.03em] capitalize text-[#000000]">
                          {item.name}
                        </h5>
                        <p className="font-bricolage font-normal text-[14px] leading-[142%] tracking-[-0.01em] capitalize text-[#000000]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-3">
                      <p className="font-bricolage font-normal text-[16px] md:text-[18px] leading-[142%] tracking-[-0.01em] text-[#000000]">
                        {item.quote}
                      </p>
                      <Image
                        src={item.stars}
                        height={24}
                        width={110}
                        alt="Rating stars"
                        className="w-[110px] mt-2"
                      />
                    </div>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;