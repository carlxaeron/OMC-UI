export default function Button(props: any = {}) {
  const { children } = props;

  let type = '';
  if(type === 'success') {
    type = 'bg-green-500 text-white';
  } else {
    type = 'bg-blue-600 text-white';
  }

  return (
    <button className={`button ${type} ${props.className} px-3 py-2.5 rounded-lg text-xs font-small`} {...props}>
      {children}
    </button>
  );
}