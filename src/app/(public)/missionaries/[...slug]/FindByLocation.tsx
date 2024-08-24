import { convertStyleToObject } from "@/app/etc/helper";

export default function FindByLocation() {
  return (
    <>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">Search by location</p></div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Search countries, regions, and cities"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637488] p-4 text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Popular locations</h3>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">United States</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">India</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">Canada</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">United Kingdom</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">Australia</p>
              </div>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Your recent searches</h3>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">Mexico</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">New York</p>
              </div>
              <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
                <p className="text-[#111418] text-sm font-medium leading-normal">California</p>
              </div>
            </div>
            <div className="flex px-4 py-3">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-transparent text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Clear all</span>
              </button>
            </div>
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">Explore funding opportunities</p>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Funding opportunities in United States</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/31e8b229-be13-4c28-abda-c8bcc2e77790.png");')}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">COVID-19 Response Fund</p>
                  <p className="text-[#637488] text-sm font-normal leading-normal">Fund to support response efforts to the COVID-19 pandemic.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/3c0e8ca0-65d1-419c-a5b3-1b636591f61e.png");')}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Support for Black Communities</p>
                  <p className="text-[#637488] text-sm font-normal leading-normal">Grants to support organizations that serve Black communities.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/54a93f34-88f8-43a8-8873-f1018a7f4c95.png");')}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">Disaster Relief for Wildfires</p>
                  <p className="text-[#637488] text-sm font-normal leading-normal">Funds for relief and recovery efforts for recent wildfires.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}