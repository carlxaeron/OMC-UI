'use client';

import { useState } from "react";
import { useRouter } from "next/router";

/* eslint-disable react/no-unescaped-entities */
export default function SignupAccountPage() {
  // const router = useRouter();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const isDisabled = () => {
    return step >= 5;
  };

  const cancelBtn = () => {
    const t = step > 1;

    return (
      <button
        onClick={() => t ? setStep(step - 1) : console.log('Cancel')}
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-transparent text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]"
      >
        <span className="truncate">{t ? 'Back' : 'Cancel'}</span>
      </button>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex gap-6 justify-between"><p className="text-[#0e141b] text-base font-medium leading-normal">Sign up</p></div>
        <div className="rounded bg-[#d0dbe7]"><div className="h-2 rounded bg-[#1466b8]" style={{ width: `${step * 20}%` }}></div></div>
        <p className="text-[#4e7397] text-sm font-normal leading-normal">Step {step} of 5</p>
      </div>
      <h1 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Create an account</h1>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">First Name</p>
          <input
            placeholder="John"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">Last Name</p>
          <input
            placeholder="Doe"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">Email</p>
          <input
            placeholder="john.doe@gmail.com"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#0e141b] text-base font-medium leading-normal pb-2">Password</p>
          <input
            placeholder="8+ characters"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-14 placeholder:text-[#4e7397] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <p className="text-[#4e7397] text-sm font-normal leading-normal pb-3 pt-1 px-4">By continuing, you agree to Crowdfund's Terms of Use and Privacy Policy</p>
      <div className="flex justify-stretch">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
          {cancelBtn}
          <button
            onClick={nextStep}
            disabled={isDisabled()}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1466b8] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}