'use client';

import { PageHeader } from "@/app/components/admin/PageHeader";
import CourseCard from "@/app/components/admin/CourseCard";

export default function Courses() {
  return (
    <>
      <PageHeader title="Courses" />
      <div className="md:flex gap-4">
        {[...Array(3)].map((_, index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </>
  )
}