// // import { sanityFetch } from "@/sanity/client";
// // import { SanityDocument } from "next-sanity";
// import Button from '@mui/material/Button'; // Import the Button component from the appropriate library
// import DemoPage from "./demo/page";
// import Container from '@mui/material/Container';
// import { Metadata } from "next";

import Hero from "./components/Hero";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "",
// };

export default function IndexPage() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/bbdc2e1a-478e-4d81-b059-ba95767ffa1a.png")',
            }}
          ></div>
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Books
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/sdxl10/f089f2bf-0e58-4642-bd16-c6575585bce5.png")',
            }}
          ></div>
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Podcast
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/d9f41576-b36d-445b-83b5-1a81451b57be.png")',
            }}
          ></div>
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Online Course
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/07a3e9f7-c861-4f69-9c8f-23becfdabb00.png")',
            }}
          ></div>
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Spiritual Direction
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/9e10df01-f36e-49b4-bdee-3cd91cf2fbbd.png")',
            }}
          ></div>
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Speaking
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/821e6491-da3f-4a2a-a13a-470a796074b5.png")',
            }}
          ></div>
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Retreats
          </p>
        </div>
      </div>
      <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Recent Projects
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/3f3b6d84-bf6e-4ce6-968e-a680517d5f27.png")',
            }}
          ></div>
          <div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">
              The Journey
            </p>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              An online course for experiencing God's love and power
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/cde901af-3095-458d-92e8-27400b16f4d6.png")',
            }}
          ></div>
          <div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">
              Spiritual Direction for Beginners
            </p>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              A book to help you grow closer to God
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage:
                'url("https://cdn.usegalileo.ai/stability/e1705c48-a192-44c1-a232-b0522dadf902.png")',
            }}
          ></div>
          <div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">
              Companions in the Dark
            </p>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              A guided journey for healing from trauma
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
