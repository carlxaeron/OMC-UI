'use client';

import { PageHeader } from "../components/admin/PageHeader";
import CourseCard from "../components/admin/CourseCard";

export default function Courses() {
  return (
    <>
      <PageHeader title="Courses" />
      <div className="flex gap-4">
        {[...Array(3)].map((_, index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </>
  )
}