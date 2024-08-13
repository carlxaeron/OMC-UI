export default function DotButton(props: { className?: string, onClick?: any }) {
  const handleClick = (e: MouseEvent) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return <button className={props.className}
    onClick={handleClick}
  >
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
}