import { Animate1 } from "@/app/components/Animate";

/* eslint-disable react/no-unescaped-entities */
export default function AboutPage() {
  return (
    <Animate1>
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/67b523ea-cf7b-466e-840b-d639daa66300.png")' }}
            ></div>
            <div className="flex flex-col items-center justify-center justify-center">
              <p className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Dr. Krizz Chan</p>
              <p className="text-[#637588] text-base font-normal leading-normal text-center">
                Innovative thinker, passionate about transforming lives. Stanford PhD, MIT alum. Global speaker, author, and educator.
              </p>
            </div>
          </div>
          <button
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto"
          >
            <span className="truncate">Follow</span>
          </button>
        </div>
      </div>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About</h2>
      <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Dr. Krizz Chan is a global speaker, educator, and author. She holds a PhD in education from Stanford University, a master's degree from Harvard University, and a
        bachelor's degree from MIT. Dr. Chan has given talks at the United Nations, World Bank, and Google, among others. She has published two books, including the
        bestseller "The Power of Education." Dr. Chan is the founder of the Chan Academy, a nonprofit organization that provides free educational resources to underserved
        communities around the world. In 2020, she was named one of Forbes' 30 Under 30 in Education.
      </p>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Mission</h2>
      <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
        My mission is to empower people with the knowledge and skills they need to reach their full potential. I believe that education is the most powerful tool we have for
        creating positive change in the world. As a teacher, I strive to inspire my students to think critically, work collaboratively, and never stop learning. As an author,
        I aim to share ideas that challenge the status quo and spark meaningful conversations. As a speaker, I hope to engage audiences with thought-provoking stories and
        insights. Whether in the classroom, on the page, or on the stage, my goal is to make a lasting impact on how we learn, teach, and grow.
      </p>
      <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Endorsements</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/e6d3f6b2-1c79-4581-b00d-770380f2202e.png")' }}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">Dennis Mueller</h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              Connect.me is a real gem and is the site of choice for people with high ambitions. We're meeting people we couldn't have found otherwise, the type of people
              that don't usually apply for roles. My favorite part is that we can highlight our team culture in a way impossible elsewhere. Just having job descriptions is
              antiquated — and read.cv fixed that.
            </p>
          </div>
        </div>
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg w-10 shrink-0"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/d3dccdb7-4fbc-46b6-95f8-cd5a3402634d.png")' }}
          ></div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111418] text-base font-bold leading-tight">Giulia Camargo</h2>
            <p className="text-[#637588] text-sm font-normal leading-normal">
              The quality of the portfolios on Connect.me are astounding. Not only due to the seamless design of the pages, but also because of the calibre of talent on the
              network. It was extremely easy to set up both a personal and company profile. I loved how their prompts helped us shine a light on the most human elements of
              Blur.io.
            </p>
          </div>
        </div>
      </div>
    </Animate1>
  );
}