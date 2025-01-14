import { DefaultIcon } from "@/app/components/FontIcon";
import { useStore } from "@/app/context/provider";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function Aside() {
  const storeState = useStore((state) => state.state);
  const storeAction = useStore((state) => state);
  const router = useRouter();
  return (
    <>
      <aside className={`${(!storeState.homeMenuOpen && storeState.isMobile) ? 'hidden' : ''} md:visible w-80 p-4 md:relative absolute left-0 bg-white md:h-auto h-full z-20`}>
        <div className="md:relative sticky top-0 left-0">
          <h1 className="flex flex-row gap-4 items-center mb-3 font-bold px-3 cursor-pointer relative">
            <span onClick={() => router.push('/')}>
              <DefaultIcon />{process.env.NEXT_PUBLIC_TITLE}
            </span>
            <FontAwesomeIcon onClick={e => {
              e.preventDefault();
              storeAction.toggleHomeMenu();
            }} className="absolute top-0 right-0 cursor-pointer md:hidden visible" icon={faClose} />
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#e7edf3]">
              <div className="text-[#0e141b]" data-icon="House" data-size="24px" data-weight="fill">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#0e141b] text-sm font-medium leading-normal">Home</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="text-[#0e141b]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#0e141b] text-sm font-medium leading-normal">Discover</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="text-[#0e141b]" data-icon="PlusCircle" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#0e141b] text-sm font-medium leading-normal">Start a project</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="text-[#0e141b]" data-icon="Compass" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#0e141b] text-sm font-medium leading-normal">Explore</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="text-[#0e141b]" data-icon="MessengerLogo" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M181.66,106.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0L112,123.31,85.66,149.66a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0L144,132.69l26.34-26.35A8,8,0,0,1,181.66,106.34ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.52a8,8,0,0,1,6.54.67A88,88,0,0,0,216,128Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#0e141b] text-sm font-medium leading-normal">Messages</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="text-[#0e141b]" data-icon="Bell" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#0e141b] text-sm font-medium leading-normal">Notifications</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );  
}