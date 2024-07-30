/* eslint-disable react/no-unescaped-entities */
// // import { sanityFetch } from "@/sanity/client";
// // import { SanityDocument } from "next-sanity";
// import Button from '@mui/material/Button'; // Import the Button component from the appropriate library

import { Animate1 } from "./components/Animate";

// import DemoPage from "./demo/page";
// import Container from '@mui/material/Container';
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "",
// };

export default function IndexPage() {
  return (
    <Animate1>
      <div className="@container">
        <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/e7ce6462-d869-4e0d-8f60-632ddcf60b73.png")' }}
          ></div>
          <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
            <h1
              className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center"
            >
              I help people and organizations become the best versions of themselves.
            </h1>
            <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div
                  className="text-[#637588] flex border-none bg-[#f0f2f4] items-center justify-center pl-4 rounded-l-xl border-r-0"
                  data-icon="MagnifyingGlass"
                  data-size="20px"
                  data-weight="regular"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
                <input
                  placeholder="Search for services, projects, posts"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-full placeholder:text-[#637588] px-4 rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                  value=""
                />
                <div className="flex items-center justify-center rounded-r-xl border-l-0 border-none bg-[#f0f2f4] pr-2">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Search</span>
                  </button>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <h1
          className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
        >
          Explore Dr. Krizz Chan's Work
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="ChartLine" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Dr. Krizz Chan's Services</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">Consulting, coaching, and training</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="Users" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Featured Project: Design</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">Helping companies design better products and services</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="BookOpen" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Featured Project: Writing</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">Writing about design, technology, and business</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="Briefcase" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Featured Project: Strategy</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">Creating strategies for companies to grow and succeed</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="Newspaper" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M88,112a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm8,40h80a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,64V184a24,24,0,0,1-24,24H32A24,24,0,0,1,8,184.11V88a8,8,0,0,1,16,0v96a8,8,0,0,0,16,0V64A16,16,0,0,1,56,48H216A16,16,0,0,1,232,64Zm-16,0H56V184a23.84,23.84,0,0,1-1.37,8H208a8,8,0,0,0,8-8Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Featured Blog Post</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">The Power of Subtraction: How to Improve Your Designs by Removing Features</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="Microphone" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Featured Podcast Episode</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">How to Get More Done in Less Time: A Guide to Productivity</p>
            </div>
          </div>
        </div>
      </div>
    </Animate1>
  );
}
