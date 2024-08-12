import { Card, CardBody, Chip } from "@material-tailwind/react";

export default function CourseCard(props: any = {}) {
  return (
    <Card className="md:w-1/3 mb-4 md:mb-0">
      <CardBody className="text-black">
        <Chip value="Free" size="sm" className="bg-gray-200 text-black inline" />
        <font className='block text-black my-3'>Beginner’s Guide to Design</font>
        <hr />
        <div className="flex">
          <div className="w-1/3 flex flex-col mt-2">
            <b className="text-lg">$50.00</b>
            <small className="mb-1">Price</small>
            <b className="text-lg">25</b>
            <small>Certificates</small>
          </div>
          <div className="w-1/3 flex flex-col mt-2">
            <b className="text-lg">13</b>
            <small className="mb-1">Chapters</small>
            <b className="text-lg">25</b>
            <small>Reviews</small>
          </div>
          <div className="w-1/3 flex flex-col mt-2">
            <b className="text-lg">254</b>
            <small className="mb-1">Orders</small>
            <b className="text-lg">500</b>
            <small>Added to shelf</small>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}