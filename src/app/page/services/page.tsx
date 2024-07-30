/* eslint-disable react/no-unescaped-entities */
export default function ServicesPage() {
  return (
    <>
      <div className="@container">
        <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
            style={{backgroundImage: 'url("https://cdn.usegalileo.ai/stability/19b026f1-9ad2-4664-aa5c-f1697be32ba0.png")'}}
          ></div>
          <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Hi, I'm Dr. Krizz Chan
              </h1>
              <h2 className="text-[#111418] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                I provide AI strategy and leadership coaching to help you
                achieve your goals.
              </h2>
            </div>
            <div className="flex-wrap gap-3 flex">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Book a free consult</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Get in touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Services
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="text-[#111418]"
            data-icon="Lightbulb"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI strategy
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Craft the right AI strategy for your organization
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="text-[#111418]"
            data-icon="ChartBar"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI roadmap
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Define a clear roadmap for executing your AI strategy
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="text-[#111418]"
            data-icon="PresentationChart"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI governance
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Ensure that your AI strategy is aligned with your broader business
              strategy
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="text-[#111418]"
            data-icon="Handshake"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M119.76,217.94A8,8,0,0,1,112,224a8.13,8.13,0,0,1-2-.24l-32-8a8,8,0,0,1-2.5-1.11l-24-16a8,8,0,1,1,8.88-13.31l22.84,15.23,30.66,7.67A8,8,0,0,1,119.76,217.94Zm132.69-96.46a15.89,15.89,0,0,1-8,9.25l-23.68,11.84-55.08,55.09a8,8,0,0,1-7.6,2.1l-64-16a8.06,8.06,0,0,1-2.71-1.25L35.86,142.87,11.58,130.73a16,16,0,0,1-7.16-21.46L29.27,59.58h0a16,16,0,0,1,21.46-7.16l22.06,11,53-15.14a8,8,0,0,1,4.4,0l53,15.14,22.06-11a16,16,0,0,1,21.46,7.16l24.85,49.69A15.9,15.9,0,0,1,252.45,121.48Zm-46.18,12.94L179.06,80H147.24L104,122c12.66,8.09,32.51,10.32,50.32-7.63a8,8,0,0,1,10.68-.61l34.41,27.57Zm-187.54-18,17.69,8.85L61.27,75.58,43.58,66.73ZM188,152.66l-27.71-22.19c-19.54,16-44.35,18.11-64.91,5a16,16,0,0,1-2.72-24.82.6.6,0,0,1,.08-.08L137.6,67.06,128,64.32,77.58,78.73,50.21,133.46l49.2,35.15,58.14,14.53Zm49.24-36.24L212.42,66.73l-17.69,8.85,24.85,49.69Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI ethics
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Make sure that your AI systems are designed and used in an ethical
              way
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="text-[#111418]"
            data-icon="Megaphone"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI for good
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Leverage AI to solve social and environmental challenges
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="text-[#111418]"
            data-icon="Briefcase"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI team building
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Build and develop a high-performing AI team
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="text-[#111418]"
            data-icon="Chat"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI executive training
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Train your company's leaders to understand and use AI effectively
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="text-[#111418]"
            data-icon="Users"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI policy
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Stay up-to-date on the latest AI research, trends, and best
              practices
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Case Studies
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/13b60eab-f5e9-424c-a279-8e02765aa57a.png")'}}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI Strategy Playbook
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Helping a Fortune 500 company develop a comprehensive AI strategy
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/7d15c456-9d9d-4aac-bef3-73a26b55257a.png")'}}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI Ethics Blueprint
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Working with a leading tech company to create an AI ethics
              framework
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/cd0448d4-260a-4186-b417-a9a80a1d5925.png")'}}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI Governance Roadmap
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Advising a government agency on best practices for AI governance
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/934eae18-8bb9-480d-a64e-e61bfc11b4d1.png")'}}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI for Good Guide
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Collaborating with a nonprofit to use AI for social impact
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/5c02e6b1-d240-4e21-bd87-67653fe99e6f.png")'}}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI Team Building Handbook
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Assisting a startup in recruiting and training their AI team
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/81c3e4d2-13c6-456a-94ca-9a0118ce2633.png")'}}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">
              AI Executive Training Manual
            </h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Training executives at a financial services firm on AI
              fundamentals
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Pricing
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
        <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h1 className="text-[#111418] text-base font-bold leading-tight">
                Starter
              </h1>
              <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-xl bg-[#1980e6] px-3 py-[3px] text-center">
                Most popular
              </p>
            </div>
            <p className="flex items-baseline gap-1 text-[#111418]">
              <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">
                $5,000
              </span>
              <span className="text-[#111418] text-base font-bold leading-tight">
                /month
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
              <div
                className="text-[#111418]"
                data-icon="Check"
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
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              2 hours of coaching per month
            </div>
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
              <div
                className="text-[#111418]"
                data-icon="Check"
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
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              Access to AI Strategy Playbook
            </div>
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
              <div
                className="text-[#111418]"
                data-icon="Check"
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
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              Monthly office hours
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h1 className="text-[#111418] text-base font-bold leading-tight">
                Growth
              </h1>
              <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-xl bg-[#1980e6] px-3 py-[3px] text-center">
                Best value
              </p>
            </div>
            <p className="flex items-baseline gap-1 text-[#111418]">
              <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">
                $10,000
              </span>
              <span className="text-[#111418] text-base font-bold leading-tight">
                /month
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
              <div
                className="text-[#111418]"
                data-icon="Check"
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
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              4 hours of coaching per month
            </div>
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
              <div
                className="text-[#111418]"
                data-icon="Check"
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
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              Access to AI Strategy Playbook
            </div>
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
              <div
                className="text-[#111418]"
                data-icon="Check"
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
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              Bi-weekly office hours
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h1 className="text-[#111418] text-base font-bold leading-tight">
                Enterprise
              </h1>
              <p className="text-white text-xs font-medium leading-normal tracking-[0.015em] rounded-xl bg-[#1980e6] px-3 py-[3px] text-center">
                Best for large organizations
              </p>
            </div>
            <p className="flex items-baseline gap-1 text-[#111418]">
              <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">
                $20,000
              </span>
              <span className="text-[#111418] text-base font-bold leading-tight">
                /month
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
              <div
                className="text-[#111418]"
                data-icon="Check"
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
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              8 hours of coaching per month
            </div>
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
              <div
                className="text-[#111418]"
                data-icon="Check"
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
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              Access to AI Strategy Playbook
            </div>
            <div className="text-[13px] font-normal leading-normal flex gap-3 text-[#111418]">
              <div
                className="text-[#111418]"
                data-icon="Check"
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
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                </svg>
              </div>
              Weekly office hours
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
