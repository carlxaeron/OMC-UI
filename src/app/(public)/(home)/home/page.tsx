// // import { sanityFetch } from "@/sanity/client";
// // import { SanityDocument } from "next-sanity";
// import Button from '@mui/material/Button'; // Import the Button component from the appropriate library

// import DemoPage from "./demo/page";
// import Container from '@mui/material/Container';
import { Metadata } from "next";
import Contents from "./Contents";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the home page",
};

export default function IndexPage() {
  return <Contents />;
}
