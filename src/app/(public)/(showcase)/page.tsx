import { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Welcome to the home page",
};

export default function IndexPage() {
  return (
    <>
      <Content />
    </>
  );
}
