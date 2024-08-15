'use client';

export default function Footer() {
  return (
    <footer className="bg-[#1e293b] text-white md:pt-[5rem] py-5 md:pb-[8rem]">
      <div className="container mx-auto">
        <div className="flex md:flex-nowrap flex-wrap md:flex-row flex-col md:text-left text-center md:gap-4 gap-6 justify-between">
          <div className="md:w-2/5 flex flex-col gap-2">
            <h2 className="text-2xl">{process.env.NEXT_PUBLIC_TITLE}</h2>
            <p>Empowering learners through accessible and engaging online education.
              Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.</p>
          </div>
          <div className="md:w-1/5 flex flex-col gap-2">
            <label className="font-bold text-lg">Get Help</label>
            <a href="#">Contact Us</a>
            <a href="#">Latest Articles</a>
            <a href="#">FAQ</a>
          </div>
          <div className="md:w-1/5 flex flex-col gap-2">
            <label className="font-bold text-lg">Programs</label>
            <a href="#">Art & Design</a>
            <a href="#">Business</a>
            <a href="#">IT & Software</a>
            <a href="#">Languages</a>
            <a href="#">Programming</a>
          </div>
          <div className="md:w-1/5 flex flex-col gap-2">
            <label className="font-bold text-lg">Contact Us</label>
            <span>Address: 123 Main Street, Anytown, CA 12345</span>
            <span>Tel: +(123) 456-7890</span>
            <span>Mail: email@email.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}