import React from "react";
import Image from "next/image";
import aboutImage from "/public/assets/Capture.png";
import Link from "next/link";
import OrangeHR from "./orangeHR";
import Slider from "../Slider";



const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function TheStorySection({}) {
  return (
    <>
      <div className="flex flex-col justify-centre align-middle items-center mx-auto ">
        <div className="sm:max-w-[500px] md:max-w-[700px] sm:px-[30px] py-[40px] mt-[50px] px-[20px] tracking-[2px] max-w-[990px]">
          <p className="text-[rgba(24,62,63,.59)] text-[12px] sm:text-[16px] w-[100%] sm:leading-[18px] leading-[16px] ">
            This is the solo-team behind Sus-Ceramics! Freshly starting from
            2023 Susma is an small independent creator located in Colchester.
            She focuses on minimalistic pottery design that have a unique breath
            of life for every piece.
          </p>
        </div>
        <OrangeHR lineWidth={"70%"}/>

        <div className="px-6 w-[100%] grid grid-cols-12 grid-rows-1 my-8 max-w-[990px]">
          <div className="col-span-12 sm:col-span-5">
            <div className="sm:pr-6 sm:pt-6">
              <div className="sm:max-w-[340px] sm:max-h-[240px]">
                <Image
                  src={aboutImage}
                  alt="Picture of Susma"
                  quality={80}
                ></Image>
              </div>
            </div>

            <div className="mb-[40px] mt-[30px] sm:mt-[40px] md:mt-[50px] text-[18px] text-gray-500">
              <p>Susma Rai | Owner</p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-7 text-[rgba(24,62,63,.59)]  ">
            <h1 className="font-[1000] text-[30px] sm:text-[60px] mb-[15px] sm-mb-[30px]">
              The Story.
            </h1>
            <div className="text-[16px] leading-[35px]">
              <p className="my-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mollis, mi sit amet sagittis luctus, lectus nisi commodo enim, a
                tincidunt magna turpis a massa. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <p className="my-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mollis, mi sit amet sagittis luctus, lectus nisi commodo enim, a
                tincidunt magna turpis a massa. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
        <OrangeHR lineWidth={"60%"} />

        <Slider slides={SLIDES} options={OPTIONS} />

        <div className="px-6 w-[100%] grid grid-cols-12 grid-rows-1 mb-[50px] max-w-[990px]">
          <div className="col-span-12 sm:col-span-8 text-[rgba(24,62,63,.59)]  ">
            <h1 className="font-[1000] text-[30px] sm:text-[60px] mb-[15px] sm-mb-[30px] leading-[60px]">
              The Product.
            </h1>
            <div className="text-[16px] leading-[35px]">
              <p className="my-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mollis, mi sit amet sagittis luctus, lectus nisi commodo enim, a
                tincidunt magna turpis a massa. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <p className="my-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mollis, mi sit amet sagittis luctus, lectus nisi commodo enim, a
                tincidunt magna turpis a massa. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-4 text-[rgba(24,62,63,.59)] sm:ml-[60px] sm:max-w-[200px]">
            <div className="pr-6 sm:pt-6 sm:mt-[50px] text-[14px] font-bold leading-[35px]">
              <p>WHERE ARE WE?</p>
            </div>

            <div className="mt-[20px] text-[16px]">
              <p>CO4 ***, Colchester, ________ </p>
            </div>
            <div className="mt-[20px] text-[16px]">
              <p>If you need anything feel free to get in contact here: </p>
            </div>
            <div className="transition ease-in text-[rgba(14,38,39,0.59)] hover:text-[rgba(14,38,39,0.3)] hover:underline mt-[20px] break-all">
              <Link href="/contact"> susceramics7@gmail.com </Link>
            </div>
          </div>
        </div>
        <OrangeHR lineWidth={"60%"} />
      </div>
    </>
  );
}
