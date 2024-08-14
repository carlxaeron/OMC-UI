import { Metadata } from "next";
import PageHeader from "./Header";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Communication",
  description: "",
};

export default function CommunicationPage() {
  return (
    <>
      <PageHeader />
      <Content />
    </>
  )
}