'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Card, CardBody, Chip, Option, Select } from "@material-tailwind/react"

export default function Content() {
  const box = ({label, text}:any) => {

    return <Card className="md:w-1/3 w-full">
      <CardBody className="flex">
        <div className="flex-1 flex flex-col">
          <label className="text-2xl">{text}</label>
          <span className="text-sm text-gray-400">{label}</span>
        </div>
        <div className="w-[65px]">
          <Chip className="bg-gray-200 text-black" value={<><FontAwesomeIcon icon={faChevronUp} className="mr-2" /><span>8%</span></>} />
        </div>
      </CardBody>
    </Card>
  }

  return (<section className="flex flex-col gap-5">
    <div>
      <label className="block mb-1">Revenue</label>
      <span className="text-gray-400 text-sm block">Get top insights about your performance</span>
    </div>
    <div className="flex flex-col md:flex-row gap-4">
      {box({label: 'Total Profits', text: '+ $24,340'})}
      {box({label: 'Last Transaction', text: '+ $98.76'})}
      {box({label: 'Debit', text: '- $103.52'})}
    </div>
    <div className="md:w-40">
      <Select variant="standard" label="Select Period">
        <Option>All</Option>
      </Select>
    </div>
    <div>
      <img src="/assets/images/revenue-graph.svg" alt="Revenue Chart" className="w-full m-auto" />
    </div>
  </section>)
}