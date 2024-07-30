'use client';

import { useContext } from "react";
import { Context } from "../context/provider";

/* eslint-disable react/no-unescaped-entities */
export default function About() {
  const ctx:any = useContext(Context);

  return (
    <>
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/49b34bf0-f25a-4340-aab1-5063bc40668e.png")',
              }}
            ></div>
            <div className="flex flex-col items-center justify-center justify-center">
              <p className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
                {ctx.settings?.title}
              </p>
              <p className="text-[#4e7397] text-base font-normal leading-normal text-center">
                Product Designer
              </p>
              <p className="text-[#4e7397] text-base font-normal leading-normal text-center">
                San Francisco, CA
              </p>
            </div>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto">
            <span className="truncate">Follow</span>
          </button>
        </div>
      </div>
      <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Bio
      </h3>
      <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
        I'm a British designer currently living in Brighton, UK. I'm huge fan of
        gothic typefaces and single shot espressos. I love talking about comic
        books.
      </p>
      <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Mission
      </h3>
      <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
        I'm a British designer currently living in Brighton, UK. I'm huge fan of
        gothic typefaces and single shot espressos. I love talking about comic
        books.
      </p>
      <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Work Experience
      </h3>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
        <div className="flex flex-col items-center gap-1 pt-5">
          <div className="size-2 rounded-full bg-[#0e141b]"></div>
          <div className="w-[1.5px] bg-[#d0dbe7] h-4 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Product Designer at Figma
          </p>
          <p className="text-[#4e7397] text-base font-normal leading-normal">
            2023-Now
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1.5px] bg-[#d0dbe7] h-4"></div>
          <div className="size-2 rounded-full bg-[#0e141b]"></div>
          <div className="w-[1.5px] bg-[#d0dbe7] h-4 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Senior Product Designer at Slack
          </p>
          <p className="text-[#4e7397] text-base font-normal leading-normal">
            2021-2023 • San Francisco, CA • I worked on the reactions feature
            that allows anyone to send cute emojis.
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1.5px] bg-[#d0dbe7] h-4"></div>
          <div className="size-2 rounded-full bg-[#0e141b]"></div>
          <div className="w-[1.5px] bg-[#d0dbe7] h-4 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Product Designer at Quip
          </p>
          <p className="text-[#4e7397] text-base font-normal leading-normal">
            2019-2021 • San Francisco, CA
          </p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-[1.5px] bg-[#d0dbe7] h-4"></div>
          <div className="size-2 rounded-full bg-[#0e141b]"></div>
          <div className="w-[1.5px] bg-[#d0dbe7] h-4 grow"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Product Designer at Facebook
          </p>
          <p className="text-[#4e7397] text-base font-normal leading-normal">
            2013-2019 • Menlo Park, CA
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 pb-3">
          <div className="w-[1.5px] bg-[#d0dbe7] h-4"></div>
          <div className="size-2 rounded-full bg-[#0e141b]"></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
          <p className="text-[#0e141b] text-base font-medium leading-normal">
            Product Design Intern at Facebook
          </p>
          <p className="text-[#4e7397] text-base font-normal leading-normal">
            2010-2013 • Menlo Park, CA
          </p>
        </div>
      </div>
      <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
        Testimonials
      </h3>
      <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{
            backgroundImage:
              'url("https://cdn.usegalileo.ai/stability/8bdb7736-1a1b-45a5-9fb1-e8e6e080d534.png")',
          }}
        ></div>
        <div className="flex h-full flex-1 flex-col items-start justify-start">
          <div className="flex w-full flex-row items-start justify-start gap-x-3">
            <p className="text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
              Tom Johnson
            </p>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              2 days ago
            </p>
          </div>
          <p className="text-[#0e141b] text-sm font-normal leading-normal">
            Jen is an amazing designer. I've had the pleasure of working with
            her for the last 3 years at Figma. She's always quick to deliver,
            and her work is top-notch. She's also a great team player, always
            willing to help out with any task. I highly recommend her for any
            design project!
          </p>
          <div className="flex w-full flex-row items-center justify-start gap-9 pt-2">
            <div className="flex items-center gap-2">
              <div
                className="text-[#4e7397]"
                data-icon="ThumbsUp"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                </svg>
              </div>
              <p className="text-[#4e7397] text-sm font-normal leading-normal">
                4
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{
            backgroundImage:
              'url("https://cdn.usegalileo.ai/stability/93860639-4e25-42e4-a169-00d1c3c65258.png")',
          }}
        ></div>
        <div className="flex h-full flex-1 flex-col items-start justify-start">
          <div className="flex w-full flex-row items-start justify-start gap-x-3">
            <p className="text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
              Sarah Thompson
            </p>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              3 days ago
            </p>
          </div>
          <p className="text-[#0e141b] text-sm font-normal leading-normal">
            Jen is an incredibly talented designer. She has a keen eye for
            detail and produces beautiful, user-friendly designs. She's also a
            pleasure to work with - friendly, professional, and always willing
            to go the extra mile. I'd highly recommend her for any design
            project!
          </p>
          <div className="flex w-full flex-row items-center justify-start gap-9 pt-2">
            <div className="flex items-center gap-2">
              <div
                className="text-[#4e7397]"
                data-icon="ThumbsUp"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                </svg>
              </div>
              <p className="text-[#4e7397] text-sm font-normal leading-normal">
                6
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{
            backgroundImage:
              'url("https://cdn.usegalileo.ai/stability/2a37bc25-983f-4598-83e4-fafa0bee4cbb.png")',
          }}
        ></div>
        <div className="flex h-full flex-1 flex-col items-start justify-start">
          <div className="flex w-full flex-row items-start justify-start gap-x-3">
            <p className="text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
              Mike Davis
            </p>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              4 days ago
            </p>
          </div>
          <p className="text-[#0e141b] text-sm font-normal leading-normal">
            Jen is a fantastic designer. She's creative, reliable, and easy to
            work with. I've had the pleasure of collaborating with her on
            several projects, and she always delivers high-quality work on time.
            I would definitely recommend her for any design project!
          </p>
          <div className="flex w-full flex-row items-center justify-start gap-9 pt-2">
            <div className="flex items-center gap-2">
              <div
                className="text-[#4e7397]"
                data-icon="ThumbsUp"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32ZM223.94,97l-12,96a8,8,0,0,1-7.94,7H88V105.89l36.71-73.43A24,24,0,0,1,144,56V80a8,8,0,0,0,8,8h64a8,8,0,0,1,7.94,9Z"></path>
                </svg>
              </div>
              <p className="text-[#4e7397] text-sm font-normal leading-normal">
                8
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
