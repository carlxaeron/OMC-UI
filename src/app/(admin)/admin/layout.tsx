// import Provider from "@/app/context/provider";
// import { Metadata, ResolvingMetadata } from "next";
import '@/app/global.css';
import { SideMenu } from "@/app/components/admin/SideMenu";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[100vh]">
      <SideMenu />
      <section className="md:w-[calc(100%-240px)] flex-1 p-4 mb-6">
        {children}
      </section>
    </div>
  )
}
