'use client';

import { Button } from "@material-tailwind/react";
import { PageHeader as AdminPageHeader } from "@/app/components/admin/PageHeader";
import DotButton from "@/app/components/admin/DotButton";

export default function PageHeader(props: any = {}) {
  return <AdminPageHeader 
    // eslint-disable-next-line react/no-children-prop
    right={<>
      <Button variant="filled" size="md" color="blue" className="">Add Course</Button>
      <DotButton />
    </>}
    title={process.env.NEXT_PUBLIC_HIDE === "true" ? 'Testing Title' : 'Courses'} />
}