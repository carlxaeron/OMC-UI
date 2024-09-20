'use client';

import { Context } from "@/app/context/provider";
import { convertStyleToObject } from "@/app/etc/helper"
import { useRouter } from "next/navigation"
import { useContext, useState } from "react";

export default function Contents() {
  const router = useRouter()
  const ctx = useContext(Context)
  const [email, setEmail] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    if (email) {
      ctx?.setState({
        landingEmail: email,
      });
      router.push("/register");
    }
  }

  const handleInput = (e, type) => {
    if (type === 'email') {
      setEmail(e.target.value)
    }
  }

  return (
    <>
      <div className="layout-content-container flex flex-col flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
              style={convertStyleToObject('background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/stability/78d03cbd-b09e-4af0-a116-4b2a0803be58.png");')}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1
                  className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                >
                  Helping the Hand that Helps
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  Every Seventh Day Adventist is a Missionary
                </h2>
              </div>
              { !ctx?.isLoggedIn() && (
                <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                  <form onSubmit={handleForm} className="flex w-full flex-1 items-stretch rounded-xl h-full">
                    <div
                      className="text-[#60758a] flex border border-[#dbe0e6] bg-white items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                      data-icon="MagnifyingGlass"
                      data-size="20px"
                      data-weight="regular"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      placeholder="Enter email address"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dbe0e6] bg-white focus:border-[#dbe0e6] h-full placeholder:text-[#60758a] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                      defaultValue=""
                      onChange={e => handleInput(e, 'email')}
                      type="email"
                      required
                    />
                    <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#dbe0e6] bg-white pr-[7px]">
                      <button
                        type="submit"
                        // onClick={() => router.push("/register")}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0d80f2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                      >
                        <span className="truncate">Get Started</span>
                      </button>
                    </div>
                  </form>
                </label>
              ) }
            </div>
          </div>
        </div>
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-center pb-2 pt-4">Missionary work is a Seventh Day Adventist Lifestyle</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="Quotes" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">Matthew 28:18-20</h2>
              <p className="text-[#60758a] text-sm font-normal leading-normal">
                Then Jesus came to them and said, “All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in
                the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the
                very end of the age.”
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="Quotes" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">1 Corinthians 12:12-13, 27</h2>
              <p className="text-[#60758a] text-sm font-normal leading-normal">
                Just as a body, though one, has many parts, but all its many parts form one body, so it is with Christ. For we were all baptized by one Spirit so as to form one
                body—whether Jews or Gentiles, slave or free—and we were all given the one Spirit to drink.
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
            <div className="text-[#111418]" data-icon="Quotes" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] text-base font-bold leading-tight">James 1:27</h2>
              <p className="text-[#60758a] text-sm font-normal leading-normal">
                Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted
                by the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}