import Image from "next/image";
import Projects from "./projects";

const Lead = () => {
  return (
    <section className="bg-[url(/lead-bg.png)] bg-cover bg-center min-h-screen">
      <div className="pt-33">
        <div className="text-center max-w-[992px] mx-auto z-40 relative">
          <h5 className="font-bricolage font-normal text-[28px] tracking-[-0.07em] capitalize text-white">
            <span className="text-[40px]">[</span> Lead Magnet{" "}
            <span className="text-[40px]">]</span>
          </h5>
          <h3 className="mt-4 font-bricolage font-bold text-[48px] tracking-[-0.03em] leading-[123%] capitalize text-white">
            Not Ready Yet?{" "}
            <span className="font-tartuffo font-thin tracking-[0.01em]">
              Get My Free Guide
            </span>
          </h3>
          <p className="mt-5 font-bricolage font-normal text-[18px] tracking-[-0.01em] capitalize leading-[142%] text-white">
            “Top 7 Website Essentials Every Healthcare Provider Needs to Attract
            More Patients”
          </p>
        </div>
        <div className="mt-10 w-[1453px] h-auto mx-auto relative">
          <Projects />
          <div className="absolute bottom-56.5 left-1/2 -translate-x-1/2">
            <div className="flex flex-col justify-center items-center gap-5">
              <div>
                <button className="bg-[#003459] text-white w-[100px] lg:w-[130px] xl:w-[150px] 2xl:w-[336px] h-[50px] 2xl:h-[59px] rounded-[334px] flex lg:gap-2 gap-1.5 justify-center items-center font-bricolage font-bold text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] tracking-[-0.07em] capitalize shadow-button">
                  <Image
                    src="/button-arrow.svg"
                    width={1000}
                    height={100}
                    alt="button-arrow"
                    className="w-[12px] md:w-[14px] lg:w-[15px] h-auto"
                  />
                  Download Free Guide
                </button>
              </div>
              <p className="font-bricolage font-normal text-[18px] leading-[142%] tracking-[-0.01em] capitalize text-white">
                Perfect for growing your email list!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lead;
