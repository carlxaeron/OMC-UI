import { Animate1 } from "@/app/components/Animate";

export default function DonatePage() {
  return (
    <Animate1>
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/b42b8735-f923-46a2-859b-36056b90221c.png"'}}
          >
            <h1
              className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center"
            >
              I am a designer, researcher, and educator working at the intersection of technology, culture, and society.
            </h1>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span className="truncate">Support</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 items-center">
          <div className="text-[#111418]" data-icon="Wallet" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-48-60a12,12,0,1,1,12,12A12,12,0,0,1,168,140Z"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#111418] text-base font-bold leading-tight">Donate</h2>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 items-center">
          <div className="text-[#111418]" data-icon="PersonSimple" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M128,80A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32ZM230.86,132.12a8,8,0,0,1-11,2.74c-.35-.21-35.11-20.59-83.88-22.67V149l62,69.73a8,8,0,1,1-12,10.62L128,164,70,229.31a8,8,0,1,1-12-10.62L120,149V112.18c-49,2.08-83.52,22.46-83.88,22.68a8,8,0,1,1-8.23-13.72C29.6,120.11,70.45,96,128,96s98.4,24.11,100.12,25.14A8,8,0,0,1,230.86,132.12Z"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#111418] text-base font-bold leading-tight">Join</h2>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 items-center">
          <div className="text-[#111418]" data-icon="HandHeart" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56ZM119.46,48A31.15,31.15,0,0,1,148.6,67a8,8,0,0,0,14.8,0,31.15,31.15,0,0,1,29.14-19C209.59,48,224,62.65,224,80c0,19.51-15.79,41.58-45.66,63.9l-11.09,2.55A28,28,0,0,0,140,112H100.68C92.05,100.36,88,90.12,88,80,88,62.65,102.41,48,119.46,48ZM16,160H40v40H16Zm203.43,8.21-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#111418] text-base font-bold leading-tight">Support</h2>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 items-center">
          <div className="text-[#111418]" data-icon="Diamond" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#111418] text-base font-bold leading-tight">VIP access</h2>
        </div>
      </div>
      <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Donate</h3>
      <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Your donation will be used to fund my research, teaching, and community work. Thank you for your support.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
        <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#111418] text-base font-bold leading-tight">One-time donation</h1>
            <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">$10</span>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Donate</span>
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h1 className="text-[#111418] text-base font-bold leading-tight">Monthly donation</h1>
              <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-xl bg-[#1980e6] px-3 py-[3px] text-center">Most popular</p>
            </div>
            <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">$5</span>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Donate</span>
          </button>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#111418] text-base font-bold leading-tight">Yearly donation</h1>
            <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">$100</span>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Donate</span>
          </button>
        </div>
      </div>
    </Animate1>
  );
}