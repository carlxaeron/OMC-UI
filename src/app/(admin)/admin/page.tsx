
import Contents from "./Contents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Welcome to the dashboard page",
};

export default function AdminDashboard() {
  return (
    <>
      <Contents />
    </>
  );
}