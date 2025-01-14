import { Metadata } from "next";
import Contents from "./Contents";

export const metadata: Metadata = {
  title: "Register",
  // description: "Welcome to " + process.env.NEXT_PUBLIC_TITLE,
};

export default function RegisterPage() {
  return <Contents />;
}