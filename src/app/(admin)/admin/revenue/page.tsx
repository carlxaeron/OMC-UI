import { Metadata } from "next";
import PageHeader from "./Header";
import Content from "./Content";
import Transactions from "./Transactions";

export const metadata: Metadata = {
  title: "Revenue",
  description: "",
};

export default function RevenuePage() {
  return (
    <>
      <PageHeader />
      <Content />
      <Transactions />
    </>
  )
}