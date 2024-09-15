import { convertStyleToObject } from "@/app/etc/helper"

export default function Support() {
  return (
    <>
      {/* <div className="layout-container flex h-full grow flex-col"> */}
        {/* <div className="px-40 flex flex-1 justify-center py-5"> */}
          {/* <div className="layout-content-container flex flex-col max-w-[960px] flex-1"> */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={convertStyleToObject('background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/3be13d32-425e-42bc-aaae-acdb52f2d48b.png");')}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Support Missionaries
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Join us in helping missionaries reach the world with the gospel.
                    </h2>
                  </div>
                  <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                      <div
                        className="text-[#897361] flex border border-[#e6e0db] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0"
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
                        placeholder="Search for a missionary, project or trip"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181411] focus:outline-0 focus:ring-0 border border-[#e6e0db] bg-white focus:border-[#e6e0db] h-full placeholder:text-[#897361] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                        value=""
                      />
                      <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#e6e0db] bg-white pr-[7px]">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ee7f2b] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
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
              <div className="flex flex-col gap-4">
                <h1
                  className="text-[#181411] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                >
                  How you can help
                </h1>
                <p className="text-[#181411] text-base font-normal leading-normal max-w-[720px]">
                  Your donations make it possible for missionaries to share the love of Jesus around the world.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/91d96074-fbf7-43c2-846b-49962e819298.png");')}
                  ></div>
                  <div>
                    <p className="text-[#181411] text-base font-medium leading-normal">Support a Missionary</p>
                    <p className="text-[#897361] text-sm font-normal leading-normal">Help a missionary family meet their financial needs</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/dd764f73-4422-40b6-80d3-e012d251ac07.png");')}
                  ></div>
                  <div>
                    <p className="text-[#181411] text-base font-medium leading-normal">Fund a Mission Trip</p>
                    <p className="text-[#897361] text-sm font-normal leading-normal">Send a missionary on a short-term trip</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/a4de3ea6-cab6-4e92-a7e3-b28cf74a25ae.png");')}
                  ></div>
                  <div>
                    <p className="text-[#181411] text-base font-medium leading-normal">Equip a Missionary</p>
                    <p className="text-[#897361] text-sm font-normal leading-normal">Provide training and resources for a missionary</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/7ec4564f-2db2-4ade-8500-31ac89d21fc0.png");')}
                  ></div>
                  <div>
                    <p className="text-[#181411] text-base font-medium leading-normal">Build a Church</p>
                    <p className="text-[#897361] text-sm font-normal leading-normal">Assist in the construction of a new church building</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Projects</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/e21a09ee-b272-4acb-a001-0d67e7603abc.png");')}
                ></div>
                <div>
                  <p className="text-[#181411] text-base font-medium leading-normal">Raising Support for My Ministry</p>
                  <p className="text-[#897361] text-sm font-normal leading-normal">$2,000 raised of $5,000</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/1d01c20f-edc5-42a1-8d39-9a73e0b7c293.png");')}
                ></div>
                <div>
                  <p className="text-[#181411] text-base font-medium leading-normal">FCA New York City</p>
                  <p className="text-[#897361] text-sm font-normal leading-normal">$1,200 raised of $2,500</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/1f2f9381-d88e-49ac-bf59-b108b06692b3.png");')}
                ></div>
                <div>
                  <p className="text-[#181411] text-base font-medium leading-normal">Church Planting in Japan</p>
                  <p className="text-[#897361] text-sm font-normal leading-normal">$3,000 raised of $10,000</p>
                </div>
              </div>
            </div>
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1
                    className="text-[#181411] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                  >
                    Ready to make an impact?
                  </h1>
                  <p className="text-[#181411] text-base font-normal leading-normal max-w-[720px">Find a missionary, project, or trip to support today.</p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ee7f2b] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
                    >
                      <span className="truncate">View all projects</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </> 
  )
}