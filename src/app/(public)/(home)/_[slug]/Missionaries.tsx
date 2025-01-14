import { convertStyleToObject } from "@/app/etc/helper"

export default function Missionaries() {
  return (
    <>
      {/* <div className="layout-content-container flex flex-col max-w-[960px] flex-1"> */}
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
              style={convertStyleToObject('background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/a42e1051-ea56-479e-b047-3c295aa2fc37.png");')}
            >
              <h1
                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center"
              >
                Support the work of our missionaries and institutions around the world
              </h1>
              <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#637588] flex border border-[#dce0e5] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0"
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
                    placeholder="Search for a missionary or institution"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-full placeholder:text-[#637588] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                    value=""
                  />
                  <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dce0e5] bg-white pr-[7px]">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Search</span>
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Projects</h2>
        <div className="p-4 @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-white">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/7e61b763-fd5e-416a-a5e7-4cbe22140882.png");')}
            ></div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4 px-4">
              <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">Caring for the vulnerable in South Africa</p>
              <div className="flex items-end gap-3 justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[#637588] text-base font-normal leading-normal">
                    We provide food, housing, and medical care to the homeless and those struggling with addiction.
                  </p>
                  <p className="text-[#637588] text-base font-normal leading-normal">23% funded</p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#1980e6] text-white text-sm font-medium leading-normal"
                >
                  <span className="truncate">Donate now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 @container">
          <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-white">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/4e70c5ab-c4e6-4308-8212-659210d95c79.png");')}
            ></div>
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4 px-4">
              <p className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">Bringing the gospel to the Middle East</p>
              <div className="flex items-end gap-3 justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-[#637588] text-base font-normal leading-normal">We share the good news in a region where it is often illegal to be a Christian.</p>
                  <p className="text-[#637588] text-base font-normal leading-normal">56% funded</p>
                </div>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#1980e6] text-white text-sm font-medium leading-normal"
                >
                  <span className="truncate">Donate now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Donor Recognition</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
              style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/4232874f-5c27-4b22-a075-b555a743a5da.png");')}
            ></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">John Smith</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">$500</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
              style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/c2a69b88-acd3-43b5-9d03-26b5bfab4c7f.png");')}
            ></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Sarah Thompson</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">$200</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
              style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/2ec1fc21-f129-4e75-87e4-f7e05278384c.png");')}
            ></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">David Johnson</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">$100</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
              style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/stability/a95576b7-2b1d-4d52-980b-398610cec3d1.png");')}
            ></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Samantha Davis</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">$50</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
              style={convertStyleToObject('background-image: url("https://cdn.usegalileo.ai/sdxl10/afc4c4c2-2fee-4ae5-a7ec-7753d0f90d3b.png");')}
            ></div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Michael Miller</h2>
              <p className="text-[#637588] text-sm font-normal leading-normal">$25</p>
            </div>
          </div>
        </div>
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Make a donation</h2>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <div className="flex w-full flex-1 items-stretch rounded-xl">
              <input
                placeholder="$100"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-14 placeholder:text-[#637588] p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                value=""
              />
              <div
                className="text-[#637588] flex border-none bg-[#f0f2f4] items-center justify-center pr-4 rounded-r-xl border-l-0"
                data-icon="CreditCard"
                data-size="24px"
                data-weight="regular"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"
                  ></path>
                </svg>
              </div>
            </div>
          </label>
        </div>
        <div className="px-4">
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
            />
            <p className="text-[#111418] text-base font-normal leading-normal">Make this a monthly donation</p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#dce0e5] border-2 bg-transparent text-[#1980e6] checked:bg-[#1980e6] checked:border-[#1980e6] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#dce0e5] focus:outline-none"
            />
            <p className="text-[#111418] text-base font-normal leading-normal">I would like to cover the processing fees for my donation</p>
          </label>
        </div>
        <div className="flex gap-4 bg-white px-4 py-3">
          <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="CreditCard" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-[#111418] text-base font-medium leading-normal">Total amount</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">3.5% + $0.30</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">You will be charged $103.50 today. Your card will be charged $100 on the first day of each month.</p>
          </div>
        </div>
        <div className="flex px-4 py-3 justify-end">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#1980e6] text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Donate now</span>
          </button>
        </div>
      {/* </div> */}
    </> 
  )
}