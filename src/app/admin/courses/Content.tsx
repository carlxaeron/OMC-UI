'use client';

import CourseCard from "@/app/components/admin/CourseCard";

export default function Content() {
  return (
    <section className="md:flex gap-4">
      {[...Array(3)].map((_, index) => (
        <CourseCard key={index} />
      ))}
    </section>
  );
}