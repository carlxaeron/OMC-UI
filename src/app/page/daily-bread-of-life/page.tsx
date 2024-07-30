/* eslint-disable react/no-unescaped-entities */
export default function DailyBreadOfLifePage() {
  return (
    <>
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{
              // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: 'url("https://cdn.usegalileo.ai/stability/9738c854-d421-4d57-9c8c-387110c7f24b.png")'
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1
                className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                Daily Bread of Life
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                A daily dose of inspiration, motivation, and encouragement from Dr. Krizz Chan
              </h2>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span className="truncate">Follow</span>
            </button>
          </div>
        </div>
      </div>
      <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
        When we connect with others and share our stories, we can find the strength to overcome challenges and make a difference. I believe that personal growth is a lifelong
        journey, and I'm excited to share my experiences and insights with you. As a psychiatrist, entrepreneur, and philanthropist, I've had the privilege of working with
        people from all walks of life. Through my projects and initiatives, I'm committed to empowering individuals and communities to thrive. I hope that my content will
        inspire you to embrace your unique path and achieve your full potential. Together, we can create a brighter future for all.
      </p>
      <div className="p-4 @container">
        <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-[#dce0e5] bg-white p-5 @[480px]:flex-row @[480px]:items-center">
          <p className="text-[#111418] text-base font-bold leading-tight">Subscribe to Daily Bread of Life</p>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#1980e6] text-white text-sm font-medium leading-normal"
          >
            <span className="truncate">Subscribe</span>
          </button>
        </div>
      </div>
      <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Featured</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/45f91b7c-4f13-4747-9d7c-f4c974ab4404.png")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/2bf69c64-9395-4cca-a6c8-508192df6d0a.png")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/1ff3e409-65ba-4c27-b919-b062fda5182b.png")' }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/stability/9240ae3e-0f9e-4fec-bd37-90faee0c4164.png")' }}
          ></div>
        </div>
      </div>
      <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Latest stories</h3>
      <div className="flex items-end gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/bab47dcf-8dc7-461c-b200-5abd8d4ef115.png")' }}
        ></div>
        <div className="flex flex-1 flex-col gap-1 items-start">
          <p className="text-[#637588] text-[13px] font-normal leading-normal max-w-[360px]">Dr. Krizz Chan</p>
          <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#f0f2f4] text-[#111418]">
            The moment you decide to take action, you begin to shape your destiny. Every step you take, every choice you make, has the power to transform your life. With
            courage and determination, you can overcome any obstacle and achieve your dreams. Embrace the journey and trust in your ability to create a future filled with
            purpose, passion, and joy. You are the author of your story, and the possibilities are endless.
          </p>
        </div>
      </div>
      <div className="flex items-end gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/fe650c0d-4749-4395-a936-5d61a6869969.png")' }}
        ></div>
        <div className="flex flex-1 flex-col gap-1 items-start">
          <p className="text-[#637588] text-[13px] font-normal leading-normal max-w-[360px]">Dr. Krizz Chan</p>
          <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#f0f2f4] text-[#111418]">
            When you face a challenge, don't let fear hold you back. Instead, focus on the opportunities for growth and learning. By embracing the unknown and taking risks,
            you can discover new strengths and capabilities. Trust in your ability to adapt and thrive in any situation. Remember, the path to success is not always smooth,
            but it's the twists and turns that make the journey worthwhile. Believe in yourself, and you'll find the courage to overcome any obstacle.
          </p>
        </div>
      </div>
      <div className="flex items-end gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/60133509-b52f-4571-9428-14963ce7a88e.png")' }}
        ></div>
        <div className="flex flex-1 flex-col gap-1 items-start">
          <p className="text-[#637588] text-[13px] font-normal leading-normal max-w-[360px]">Dr. Krizz Chan</p>
          <p className="text-base font-normal leading-normal flex max-w-[360px] rounded-xl px-4 py-3 bg-[#f0f2f4] text-[#111418]">
            Life is a grand adventure, and each day is an opportunity to explore, learn, and grow. When you approach each moment with curiosity and enthusiasm, you open
            yourself up to a world of possibilities. Embrace the unknown, and you'll discover new passions, interests, and connections. Remember, the journey is just as
            important as the destination. Enjoy the process, and savor the beauty of everyday moments. You are the author of your story, so make it an epic tale of courage,
            compassion, and creativity.
          </p>
        </div>
      </div>
    </>
  );
}