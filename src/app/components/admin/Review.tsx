import { Avatar, Card, CardBody } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DotButton from "./DotButton";

export default function Review() {
  return (
    <Card>
      <CardBody className="flex flex-col gap-2 relative">
        <DotButton className="absolute top-4 right-4" />
        <div>
          Rating: 
          <span className="ml-2 text-gray-200">
            <FontAwesomeIcon icon={faStar} className="text-[#EAB308]" />
            <FontAwesomeIcon icon={faStar} className="text-[#EAB308]" />
            <FontAwesomeIcon icon={faStar} className="text-[#EAB308]" />
            <FontAwesomeIcon icon={faStar} className="text-[#EAB308]" />
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
        <div>
          <label>Course Name:</label>
          <span className="ml-2 text-black text-lg">Beginners Guide to Design</span>
        </div>
        <div className="flex items-center gap-2">
          <Avatar color="blue" size="xs" src="/assets/images/sample-user.svg" />
          <div className="flex-1 flex flex-col">
            <label>Chris Walter</label>
            <span>3 days ago</span>
          </div>
        </div>
        <p className="text-gray-400">I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were engaging, and the real-world examples really helped solidify my understanding.</p>
      </CardBody>
    </Card>
  )
}