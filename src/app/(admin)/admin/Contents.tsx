'use client';

import { Card, CardBody } from "@material-tailwind/react";
import { Icon } from "../Top";
// fa
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoinSign, faDonate, faHandHoldingUsd, faHandshake, faWallet } from '@fortawesome/free-solid-svg-icons'
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Todo from "@/app/components/Todo";

const SalesCard = ({ topText, bottomText, bottomRightText, icon, title, children }: { title?: string, topText?: JSX.Element | string, bottomText?: JSX.Element | string, bottomRightText?: JSX.Element, icon: JSX.Element, children?: JSX.Element }) => <Card className="rounded">
  <CardBody className="h-full">
    { icon && <Icon>{icon}</Icon> }
    { title && <h2 className="text-lg font-bold text-black">{title}</h2> }
    { topText && (
      <div className="flex items-center justify-between mt-4">
        <h2 className="text-2xl font-semibold text-black">{topText}</h2>
      </div>
    ) }
    { (bottomText || bottomRightText) && (
      <p className="text-sm text-gray-500 grid grid-cols-2">
        { bottomText && <span className="text-sm">{bottomText}</span> }
        { bottomRightText && <span className="flex gap-2 items-center text-green-500 font-medium text-sm justify-end">{bottomRightText}</span> }
      </p>
    )}
    { children }
  </CardBody>
</Card>

export default function Contents() {
  return (
    <div className="flex flex-row flex-wrap gap-5">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-1">
        <SalesCard
          icon={<FontAwesomeIcon className="text-blue-gray-500" icon={faDonate} />}
          topText="$34K"
          bottomText="Total Donations"
          bottomRightText={<>+10.40% <ArrowUpIcon className="h-3 w-3" /></>}
        />
        <SalesCard
          icon={<FontAwesomeIcon className="text-blue-gray-500" icon={faWallet} />}
          topText="$56K"
          bottomText="Total Funds"
          bottomRightText={<>+23.40% <ArrowUpIcon className="h-3 w-3" /></>}
        />
        <SalesCard
          icon={<FontAwesomeIcon className="text-blue-gray-500" icon={faHandshake} />}
          topText="128"
          bottomText="Total Sponsors"
          bottomRightText={<>+10% <ArrowUpIcon className="h-3 w-3" /></>}
        />
        <SalesCard
          icon={<FontAwesomeIcon className="text-blue-gray-500" icon={faHandHoldingUsd} />}
          topText="$12K"
          bottomText={<>Total Earned in <b>Investments</b></>}
          bottomRightText={<>+10% <ArrowUpIcon className="h-3 w-3" /></>}
        />
        <SalesCard
          icon={<FontAwesomeIcon className="text-blue-gray-500" icon={faDonate} />}
          topText="$23K"
          bottomText={<>Total Earned in <b>Loans</b></>}
          bottomRightText={<>+20% <ArrowUpIcon className="h-3 w-3" /></>}
        />
        <SalesCard
          icon={<FontAwesomeIcon className="text-blue-gray-500" icon={faHandHoldingUsd} />}
          topText="$34K"
          bottomText={<>Total Earned in <b>Stakes</b></>}
          bottomRightText={<>+30% <ArrowUpIcon className="h-3 w-3" /></>}
        />
        <SalesCard
          icon={<FontAwesomeIcon className="text-blue-gray-500" icon={faBitcoinSign} />}
          topText="$45K"
          bottomText={<>Total Earned in <b>Token</b></>}
          bottomRightText={<>+40% <ArrowUpIcon className="h-3 w-3" /></>}
        />
      </div>
      <div className="w-[400px] flex flex-col gap-5">
        <SalesCard
          title="Upcoming Group Sessions/e-Library News"
        />
        <SalesCard
          title="News/Events about Payments"
        />
        <SalesCard
          title="Todos (Tracking Progress, completed and on-going)">
          <br/>
          <Todo />
        </SalesCard>
      </div>
    </div>
  );
}