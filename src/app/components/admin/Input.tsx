import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@material-tailwind/react";

export default function InputComponent(props: { className?: string }) {
  return (
    <div className={`relative flex ${props.className}`}>
      <Input label="Search User" type="text" 
      className="pr-6"
      containerProps={{
        className: "min-w-0",
      }} />
      <FontAwesomeIcon className="absolute right-1 top-1/2 transform -translate-y-1/2" icon={faSearch} />
    </div>
  );
}