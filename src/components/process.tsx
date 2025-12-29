import Image from "next/image";

const Process = () => {
  return (
    <section className="py-30 bg-black">
      <div>
        <div className="text-center max-w-[992px] mx-auto z-40 relative">
          <h5 className="font-bricolage font-normal text-[28px] tracking-[-0.07em] capitalize text-white">
            <span className="text-[40px]">[</span> Process{" "}
            <span className="text-[40px]">]</span>
          </h5>
          <h3 className="mt-4 font-bricolage font-bold text-[48px] tracking-[-0.03em] leading-[123%] capitalize text-white">
            A Smooth, Stress-Free{" "}
            <span className="font-tartuffo font-thin tracking-[0.01em]">
              Design Process
            </span>
          </h3>
          <p className="mt-5 font-bricolage font-normal text-[18px] tracking-[-0.01em] capitalize leading-[142%] text-white">
            Simple, transparent, and done for you
          </p>
        </div>
        <div className="bg-[url(/process.png)] bg-cover bg-center w-[1450px] h-[303px] mx-auto flex justify-between items-center px-31 relative mt-10">
        <Image src="/line.png" height={100} width={100} alt="line" className="w-[1170px] h-[1px] absolute top-21"/>
          <div className="max-w-[311px] z-20">
            <div className="bg-white text-[#0A0A0A] rounded-full w-[47px] h-[47px] font-bricolage font-bold text-[24px] leading-[123%] tracking-[-0.03em] flex justify-center items-center">
              01
            </div>
            <h4 className="font-bricolage font-bold text-[34px] leading-[123%] tracking-[-0.03em] capitalize text-white mt-6.5 mb-3">
              Discovery Call
            </h4>
            <p className="font-bricolage font-normal text-[18px] leading-[142%] tracking-[-0.01em] capitalize text-white">
              We discuss your practice, patients, and goals.
            </p>
          </div>
          <div className="max-w-[311px] z-20">
            <div className="bg-white text-[#0A0A0A] rounded-full w-[47px] h-[47px] font-bricolage font-bold text-[24px] leading-[123%] tracking-[-0.03em] flex justify-center items-center">
              02
            </div>
            <h4 className="font-bricolage font-bold text-[34px] leading-[123%] tracking-[-0.03em] capitalize text-white mt-6.5 mb-3">
              Design & Build
            </h4>
            <p className="font-bricolage font-normal text-[18px] leading-[142%] tracking-[-0.01em] capitalize text-white">
               I create a custom website that reflects your expertise.
            </p>
          </div>
          <div className="max-w-[311px] z-20">
            <div className="bg-white text-[#0A0A0A] rounded-full w-[47px] h-[47px] font-bricolage font-bold text-[24px] leading-[123%] tracking-[-0.03em] flex justify-center items-center">
              03
            </div>
            <h4 className="font-bricolage font-bold text-[34px] leading-[123%] tracking-[-0.03em] capitalize text-white mt-6.5 mb-3">
              Launch & Optimize
            </h4>
            <p className="font-bricolage font-normal text-[18px] leading-[142%] tracking-[-0.01em] capitalize text-white">
               Your site goes live with full support and optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
