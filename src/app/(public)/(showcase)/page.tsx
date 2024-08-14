import { Metadata } from "next";
import Content from "./Content";
import Bottom from "./Bottom";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Welcome to the home page",
};

export default function IndexPage() {
  return (
    <>
      <Content />
      <Bottom />
    </>
  );
}
