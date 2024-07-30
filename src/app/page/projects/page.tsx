export default function ProjectsPage() {
  return (
    <>
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
          <div className="flex gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/ed28de6d-3d7a-40f7-9f38-a5b8f4201473.png")' }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em]">Dr. Krizz Chan</p>
              <p className="text-[#637588] text-base font-normal leading-normal">Pediatrician, M.D., Ph.D.</p>
            </div>
          </div>
          <button
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto"
          >
            <span className="truncate">Follow</span>
          </button>
        </div>
      </div>
      <div className="pb-3">
        <div className="flex border-b border-[#dce0e5] px-4 gap-8">
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4" href="#">
            <p className="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">About</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111418] text-[#111418] pb-[13px] pt-4" href="#">
            <p className="text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">Projects</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4" href="#">
            <p className="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">Lab Notes</p>
          </a>
          <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637588] pb-[13px] pt-4" href="#">
            <p className="text-[#637588] text-sm font-bold leading-normal tracking-[0.015em]">Media</p>
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">Projects</p>
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal"
        >
          <span className="truncate">New Project</span>
        </button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/f116fcb4-5db7-4b74-ba5c-ec94836877db.png")' }}
          ></div>
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">Vaccine Development for Pediatric Patients</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">2023</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/c74a002c-fd62-4154-a50f-441e87848765.png")' }}
          ></div>
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">Preventative Care for Children in Underprivileged Communities</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">2022</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/bfbb1d23-8e12-43c2-ba74-8ac91b36226b.png")' }}
          ></div>
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">Mental Health Resources for Young Adults</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">2021</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/7913fd16-8138-4249-a5fa-dbbd6052b763.png")' }}
          ></div>
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">Nutrition and Exercise Programs for Obese Adolescents</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">2020</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <a href="#" className="flex size-10 items-center justify-center">
          <div className="text-[#111418]" data-icon="CaretLeft" data-size="18px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
            </svg>
          </div>
        </a>
        <a className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#111418] rounded-full bg-[#f0f2f4]" href="#">1</a>
        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">2</a>
        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">3</a>
        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">4</a>
        <a className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#111418] rounded-full" href="#">5</a>
        <a href="#" className="flex size-10 items-center justify-center">
          <div className="text-[#111418]" data-icon="CaretRight" data-size="18px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}