import { EnvelopeIcon, BellAlertIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Badge, Input } from "@material-tailwind/react";
import { color } from "@material-tailwind/react/types/components/alert";
// import FontIcon from "../components/FontIcon";

export const Icon = ({ children, config }: { children: React.ReactNode, config?: { 
  withBadge?: boolean | false,
  badgeColor?: color | 'red',
 } }) => {

  const html =  <span className="cursor-pointer p-2 inline-flex text-gray-500 bg-[#eff4fb] rounded-full max-h-8 align-middle justify-center">
    {children}
  </span>

  return config?.withBadge ? (
    <Badge color={config.badgeColor}>
      {html}
    </Badge>
  ) : html
}

export default function Top() {
  const User = () => (
    <div className="flex items-center gap-3">
      <div className="flex flex-col justify-evenly text-right pl-4">
        <span className="text-[0.9rem]">John Doe</span>
        <span className="text-sm text-gray-500">Admin</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="h-12 w-12 rounded-full object-cover object-center"
        src="https://demo.tailadmin.com/src/images/user/user-01.png"
      />
      <ChevronDownIcon className="h-4 w-4" />
    </div>
  )

  return (
    <section className="p-4 shadow-md bg-white text-black grid grid-cols-2">
      <div>
        <div className="flex items-center gap-5">
          <MagnifyingGlassIcon className="h-4 w-4" />
          <Input className="border-none" type="text" label="Search and Explore..."
            labelProps={{
              className: "before:content-none after:content-none",
            }} />
        </div>
      </div>
      <div className="flex justify-end gap-5 items-center">
        <Icon config={{withBadge: true}}>
          <EnvelopeIcon className="h-5 w-5" />
          {/* <FontIcon icon="Envelope" /> */}
        </Icon>
        <Icon config={{withBadge: true}}>
          <BellAlertIcon className="h-5 w-5" />
          {/* <FontIcon icon="Bell" /> */}
        </Icon>
        <User />
      </div>
    </section>
  )
}