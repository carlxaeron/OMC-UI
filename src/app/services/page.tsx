export default function Services() {
  return (
    <>
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/74b08a3d-9d23-4255-92f0-069f9b444ed9.png")',
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Professional Services
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Our experts are ready to help you get the most out of Acme Inc.
                We offer a range of services, from onboarding and training to
                custom solutions and integrations.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4">
          <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
            Our Services
          </h1>
          <p className="text-[#0e141b] text-base font-normal leading-normal max-w-[720px]">
            No matter where you are in your journey, we have the expertise to
            help you succeed.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/876d838c-c910-44ce-b0c6-fb34ffc7973a.png")',
              }}
            ></div>
            <div>
              <p className="text-[#0e141b] text-base font-medium leading-normal">
                Launch and Scale
              </p>
              <p className="text-[#4e7397] text-sm font-normal leading-normal">
                Get up and running quickly, then scale with confidence.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/27c0db09-a0b3-4308-9e28-a39060866a5c.png")',
              }}
            ></div>
            <div>
              <p className="text-[#0e141b] text-base font-medium leading-normal">
                Strategic Consulting
              </p>
              <p className="text-[#4e7397] text-sm font-normal leading-normal">
                Work with experts to solve your toughest challenges.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/d719b694-6562-41bb-9d2e-0d3f2c4267ef.png")',
              }}
            ></div>
            <div>
              <p className="text-[#0e141b] text-base font-medium leading-normal">
                Solution Architecture
              </p>
              <p className="text-[#4e7397] text-sm font-normal leading-normal">
                Design and build the perfect solution for your needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/f35d2b62-60cf-43e1-b120-a15f76093e0f.png")',
              }}
            ></div>
            <div>
              <p className="text-[#0e141b] text-base font-medium leading-normal">
                Custom Development
              </p>
              <p className="text-[#4e7397] text-sm font-normal leading-normal">
                Create new features and functionality tailored to your business.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/e8aeb5ad-5636-4d2b-a2b5-cb8e729a56ac.png")',
              }}
            ></div>
            <div>
              <p className="text-[#0e141b] text-base font-medium leading-normal">
                Data Analysis
              </p>
              <p className="text-[#4e7397] text-sm font-normal leading-normal">
                Mine your data to uncover insights and drive decisions.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/stability/f62ebbe7-6585-40f4-ad79-d12c8ccd3f12.png")',
              }}
            ></div>
            <div>
              <p className="text-[#0e141b] text-base font-medium leading-normal">
                System Integration
              </p>
              <p className="text-[#4e7397] text-sm font-normal leading-normal">
                Connect Acme Inc to your existing systems and tools.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Case Studies
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div
          className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-video"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/sdxl10/7aaeb66a-51cb-4236-868b-a938946ff9a7.png")',
          }}
        >
          <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
            Growing fast with Acme Inc
          </p>
        </div>
        <div
          className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-video"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/sdxl10/1952f024-231d-4338-a886-da57231bb78a.png")',
          }}
        >
          <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
            Revolutionizing customer support
          </p>
        </div>
        <div
          className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-video"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/sdxl10/67864bee-b4a3-4e09-a028-8078425c66a9.png")',
          }}
        >
          <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
            Scaling operations with Acme Inc
          </p>
        </div>
        <div
          className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-video"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/sdxl10/788fceb8-2065-4e68-81db-72dfdbd11a50.png")',
          }}
        >
          <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
            Empowering sales with AI
          </p>
        </div>
        <div
          className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-video"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/sdxl10/a068ca47-1d26-4ed8-af64-2f1ec8431282.png")',
          }}
        >
          <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
            Building a better product roadmap
          </p>
        </div>
        <div
          className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-video"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/sdxl10/1aeed2b5-6e90-4b85-aa9b-b9606f4bcf94.png")',
          }}
        >
          <p className="text-white text-base font-bold leading-tight w-4/5 line-clamp-2">
            Unlocking the power of customer feedback
          </p>
        </div>
      </div>
      <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Pricing
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
          <div
            className="text-[#0e141b]"
            data-icon="Rocket"
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
              <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83ZM99.43,184h57.14c21.12-37.54,25.07-73.48,11.74-106.88C156.55,47.64,134.49,29,128,24c-6.51,5-28.57,23.64-40.33,53.12C74.36,110.52,78.31,146.46,99.43,184Zm-15,5.85Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM208,152.36l-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0e141b] text-base font-bold leading-tight">
              Launch and Scale
            </h2>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              $5k - $50k
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
          <div
            className="text-[#0e141b]"
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
            <h2 className="text-[#0e141b] text-base font-bold leading-tight">
              Strategic Consulting
            </h2>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              $3k - $30k
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
          <div
            className="text-[#0e141b]"
            data-icon="Gear"
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
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0e141b] text-base font-bold leading-tight">
              Solution Architecture
            </h2>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              $3k - $30k
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
          <div
            className="text-[#0e141b]"
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
            <h2 className="text-[#0e141b] text-base font-bold leading-tight">
              Custom Development
            </h2>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              $5k - $50k
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
          <div
            className="text-[#0e141b]"
            data-icon="Database"
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
              <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0e141b] text-base font-bold leading-tight">
              Data Analysis
            </h2>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              $3k - $30k
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
          <div
            className="text-[#0e141b]"
            data-icon="CurrencyDollar"
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
              <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#0e141b] text-base font-bold leading-tight">
              System Integration
            </h2>
            <p className="text-[#4e7397] text-sm font-normal leading-normal">
              $3k - $30k
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Get started
      </h2>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Your email address"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border border-[#d0dbe7] bg-slate-50 focus:border-[#d0dbe7] h-14 placeholder:text-[#4e7397] p-[15px] text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex px-4 py-3 justify-start">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1466b8] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Get in touch</span>
        </button>
      </div>
    </>
  );
}
