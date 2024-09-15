import { convertStyleToObject } from "@/app/etc/helper";

export default function FindByGroup() {
  return (
    <>
      {/* <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1"> */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">Find a mission group</p>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Search for a mission group"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 text-base font-normal leading-normal"
                value=""
              />
            </label>
          </div>
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f2f4] pl-2 pr-4">
              <div className="text-[#111418]" data-icon="Globe" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#111418] text-sm font-medium leading-normal">Location</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f2f4] pl-2 pr-4">
              <div className="text-[#111418]" data-icon="Cross" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M200,72H160V32a16,16,0,0,0-16-16H112A16,16,0,0,0,96,32V72H56A16,16,0,0,0,40,88v32a16,16,0,0,0,16,16H96v88a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V136h40a16,16,0,0,0,16-16V88A16,16,0,0,0,200,72Zm0,48H160a16,16,0,0,0-16,16v88H112V136a16,16,0,0,0-16-16H56V88H96a16,16,0,0,0,16-16V32h32V72a16,16,0,0,0,16,16h40Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#111418] text-sm font-medium leading-normal">Denomination</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f2f4] pl-2 pr-4">
              <div className="text-[#111418]" data-icon="ProjectorScreen" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M232,64V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V64A16,16,0,0,0,40,80v96H32a8,8,0,0,0,0,16h88v17.38a24,24,0,1,0,16,0V192h88a8,8,0,0,0,0-16h-8V80A16,16,0,0,0,232,64ZM128,240a8,8,0,1,1,8-8A8,8,0,0,1,128,240ZM40,48H216V64H40ZM200,176H56V80H200Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#111418] text-sm font-medium leading-normal">Current projects</p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f2f4] pl-2 pr-4">
              <div className="text-[#111418]" data-icon="ArrowsDownUp" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#111418] text-sm font-medium leading-normal">Sort by</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/a340fb57-4d3c-4cc3-ba5c-be9b05408783.png");')}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">New Heights Ministries</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">5 members · 2 projects</p>
              </div>
            </div>
            <div className="shrink-0">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit"
              >
                <span className="truncate">Support</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/7c8aff46-51b9-4c98-82cb-150904ba0c93.png");')}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Blessings in the City</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">3 members · 1 project</p>
              </div>
            </div>
            <div className="shrink-0">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit"
              >
                <span className="truncate">Support</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/1e9337f6-bda0-4ed5-adc5-4fdd8b439c98.png");')}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Kingdom Builders</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">7 members · 3 projects</p>
              </div>
            </div>
            <div className="shrink-0">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit"
              >
                <span className="truncate">Support</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/44524b71-aba7-41a3-b1f5-dbe8e6fbe11e.png");')}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Harvest Time Missions</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">6 members · 2 projects</p>
              </div>
            </div>
            <div className="shrink-0">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit"
              >
                <span className="truncate">Support</span>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
                style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/e361a426-f04a-4c7a-8245-592ce0758636.png");')}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">City of Refuge Ministries</p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">4 members · 1 project</p>
              </div>
            </div>
            <div className="shrink-0">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-fit"
              >
                <span className="truncate">Support</span>
              </button>
            </div>
          </div>
        {/* </div>
      </div> */}
    </> 
  )
}