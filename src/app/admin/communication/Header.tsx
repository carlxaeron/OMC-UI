'use client';

import { Button } from "@material-tailwind/react";
import { PageHeader as AdminPageHeader } from "@/app/components/admin/PageHeader";

export default function PageHeader(props: any = {}) {
  return <AdminPageHeader 
    // eslint-disable-next-line react/no-children-prop
    right={<>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 30"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a2 2 0 100 4 2 2 0 000-4zm0 7a2 2 0 100 4 2 2 0 000-4zm0 7a2 2 0 100 4 2 2 0 000-4z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>}
    title={process.env.NEXT_PUBLIC_HIDE === "true" ? 'Testing Title' : 'Communication'} />
}