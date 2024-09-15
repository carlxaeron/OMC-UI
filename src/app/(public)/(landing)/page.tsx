import { Metadata } from "next";
import Contents from "./Contents";

export const metadata: Metadata = {
  title: "Welcome to " + process.env.NEXT_PUBLIC_TITLE,
  description: "Welcome to " + process.env.NEXT_PUBLIC_TITLE,
};

export default function IndexPage() {
  return <Contents />;
}
