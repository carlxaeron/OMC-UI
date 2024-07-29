/* eslint-disable react/no-unescaped-entities */
export default function Ministry() {
  return (
    <>
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url("https://cdn.usegalileo.ai/stability/560e7adc-2026-470c-b7f7-4c10d4534508.png")'
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1
                  className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                >
                  Ministries
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  At Hillside, we offer a variety of ways to get involved and connected. From our Sunday services to our small groups, there's a place for you here.
                </h2>
              </div>
              <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div
                    className="text-[#4e7397] flex border border-[#d0dbe7] bg-slate-50 items-center justify-center pl-[15px] rounded-l-xl border-r-0"
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
                    placeholder="Search ministries..."
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-full placeholder:text-[#4e7397] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                    value=""
                  />
                  <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#d0dbe7] bg-slate-50 pr-[7px]">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1466b8] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                    >
                      <span className="truncate">Find a Ministry</span>
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="p-4 @container">
          <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#d0dbe7] bg-slate-50 p-5 @[480px]:flex-row @[480px]:items-center">
            <div className="flex flex-col gap-1">
              <p className="text-[#0e141b] text-base font-bold leading-tight">Get Involved</p>
              <p className="text-[#4e7397] text-base font-normal leading-normal">
                We believe that growth happens in the context of community. We have a variety of small groups, classes, and more for you to connect with.
              </p>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1466b8] text-slate-50 text-sm font-medium leading-normal"
            >
              <span className="truncate">Find a Group</span>
            </button>
          </div>
        </div>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Ministries</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/c74a002c-fd62-4154-a50f-441e87848765.png")' }}
            ></div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">Children</p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/92bad18b-3927-4aab-8439-e35777ba5ef8.png")' }}
            ></div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">Youth</p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/a205cfc4-2654-474d-a111-e48da8c39bd7.png")' }}
            ></div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">College</p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0a894cce-3c59-44da-b56a-930c7f4f9553.png")' }}
            ></div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">Young Adults</p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/67d35e73-ff4c-44c2-a67f-4c245dc109a9.png")' }}
            ></div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">Women</p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/b19afb79-6c4e-45cb-92f5-caf172a3c456.png")' }}
            ></div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">Men</p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/f66e8da5-b524-4a02-92fb-3c9c9f53aa77.png")' }}
            ></div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">Marriage</p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/5afff004-5ac0-44b4-95ce-59b1a9bd8905.png")' }}
            ></div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">Missions</p>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/ef6640fd-1515-4a32-bf0b-04bf6ab0faa0.png")' }}
            ></div>
            <p className="text-[#0e141b] text-base font-medium leading-normal">Prayer</p>
          </div>
        </div>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Ministry Stories</h2>
        <div className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[#4e7397] text-sm font-normal leading-normal">March 14, 2022</p>
                <p className="text-[#0e141b] text-base font-bold leading-tight">A Hopeful Future for Teens</p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                  The Youth Ministry has been a place of hope and growth for teens in our community. The ministry has helped hundreds of young people navigate life's
                  challenges, develop strong character, and build lasting friendships.
                </p>
              </div>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit"
              >
                <span className="truncate">Read more</span>
              </button>
            </div>
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/0e206a0f-e541-438e-999a-10a8d5f8a396.png")' }}
            ></div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-[#4e7397] text-sm font-normal leading-normal">March 10, 2022</p>
                <p className="text-[#0e141b] text-base font-bold leading-tight">Celebrating Women's Ministry</p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                  This month, we're celebrating the Women's Ministry and its impact on the lives of women at Hillside. This ministry has created a supportive community for
                  women to grow in faith, build meaningful relationships, and use their gifts to serve others.
                </p>
              </div>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit"
              >
                <span className="truncate">Read more</span>
              </button>
            </div>
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/e4bf125b-07cc-4323-b0af-60023d2f5158.png")' }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}