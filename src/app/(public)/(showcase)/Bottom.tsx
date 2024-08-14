export default function Bottom() {
  return (
    <section>
      <div className="bg-gray-50">
        <div className="flex flex-wrap md:flex-nowrap py-10 container mx-auto">
          {[
            { label: "250+", text: "Courses by our best mentors" },
            { label: "1000+", text: "Courses by our best mentors" },
            { label: "15+", text: "Courses by our best mentors" },
            { label: "2400+", text: "Courses by our best mentors" },
          ].map((item) => (
            <div className="md:w-1/4 w-1/2 text-center flex flex-col gap-4 md:mb-0 mb-4" key={item.label}>
              <span className="text-3xl font-bold">{item.label}</span>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}