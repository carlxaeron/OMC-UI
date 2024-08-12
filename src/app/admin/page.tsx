// // import { sanityFetch } from "@/sanity/client";
// // import { SanityDocument } from "next-sanity";
// import Button from '@mui/material/Button'; // Import the Button component from the appropriate library

// import DemoPage from "./demo/page";
// import Container from '@mui/material/Container';
import { Metadata } from "next";
import PageHeader from "./Header";
import { Card } from "@material-tailwind/react";
import Dashboard from "./Dashboard";
import Reviews from "./Reviews";
import Courses from "./Courses";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardPage() {
  return (
    <>
      <PageHeader />
      {/* eslint-disable-next-line react/no-children-prop */}
      <Dashboard />
      <Reviews />
      <Courses />
    </>
  );
}
