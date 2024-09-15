'use client';

import { Button } from "@material-tailwind/react";
import { convertStyleToObject } from "../../../etc/helper";

export default function Contents() {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">Home</p></div>
        <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Recommended for you</h3>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/4729c66f-c4d3-4ab4-b7ac-b43328eac0b2.png");')}
              ></div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Book: The Art of Navigating the Sea of Change</p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#4e7397] text-base font-normal leading-normal">A guide to mastering the art of change management in the digital age</p>
                  <Button>View</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/58348c4c-6474-4c26-86de-da2ee5e08776.png");')}
              ></div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Katie Smith</p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#4e7397] text-base font-normal leading-normal">Founder at TechSavvy. 1,234 followers. 5 projects supported.</p>
                  <Button>Follow</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/5b083a14-421d-48ec-94e3-601b080d51fd.png");')}
              ></div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Max Johnson</p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#4e7397] text-base font-normal leading-normal">UX Design Lead at InnovateX. 2,345 followers. 4 projects supported.</p>
                  <Button>Follow</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/a231bef1-1537-4ab1-849c-46d7dfab1e58.png");')}
              ></div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Book: The Art of Navigating the Sea of Change</p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#4e7397] text-base font-normal leading-normal">A guide to mastering the art of change management in the digital age</p>
                  <Button>View</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/932aaa90-1214-4abc-90f5-fdcc31914f0a.png");')}
              ></div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Katie Smith</p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#4e7397] text-base font-normal leading-normal">Founder at TechSavvy. 1,234 followers. 5 projects supported.</p>
                  <Button>Follow</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 @container">
            <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/08a36b9c-83dc-4ec2-9066-cc2fe7055d54.png");')}
              ></div>
              <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
                <p className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Max Johnson</p>
                <div className="flex items-end gap-3 justify-between">
                  <p className="text-[#4e7397] text-base font-normal leading-normal">UX Design Lead at InnovateX. 2,345 followers. 4 projects supported.</p>
                  <Button>Follow</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}