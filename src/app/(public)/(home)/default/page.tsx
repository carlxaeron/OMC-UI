import Contents from "./Contents";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page",
  description: "Welcome to the page",
};

export default function IndexPage() {
  return (
    <>
      <Contents />
    </>
  );
}