export default function ProjectsPage() {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">Projects by Dr. Krizz Chan</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/e8d7b22c-120f-41e8-9809-c4b86dfba92e.png")' }}
          ></div>
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">Yoga Studio</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">A modern, inclusive yoga studio in the heart of downtown</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/f68fa044-e88e-4cb2-94fa-0be90ef7eab0.png")' }}
          ></div>
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">Coffee Shop</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">A cozy neighborhood coffee shop with a passion for community</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/337e1b90-f2e7-4533-ac20-ca1d3eae9fa8.png")' }}
          ></div>
          <div>
            <p className="text-[#111418] text-base font-medium leading-normal">Fitness App</p>
            <p className="text-[#637588] text-sm font-normal leading-normal">A fitness app designed to help users find joy in movement</p>
          </div>
        </div>
      </div>
    </>
  );
}