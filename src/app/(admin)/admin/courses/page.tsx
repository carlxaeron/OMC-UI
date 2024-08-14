import { Metadata } from "next";
import PageHeader from "./Header";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Courses",
  description: "",
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader />
      <Content />
    </>
  )
}