'use client';

import { useContext, useEffect, useState } from "react";
import Page1 from "./Page1";
import ThankYouPage from "./ThankYou";
import { Alert, Step, Stepper } from "@material-tailwind/react";
import { Context, ProviderValue } from "@/app/context/provider";
import { ReactNode } from "react";
import Page2 from "./Page2";

export type pageDataTypes = {
  success: boolean,
  setSuccess: any,
  ctx: ProviderValue,
  isLoading: boolean,
  setIsLoading: any,
  errMsg: string,
  setErrMsg: any,
}

export default function Contents() {
  const [success, setSuccess] = useState(false);
  const ctx = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [cform, setCform] = useState({});

  useEffect(() => {
    CheckRegister(ctx);
  }, [])

  const pageData = {
    success,
    setSuccess,
    ctx,
    isLoading,
    setIsLoading,
    errMsg,
    setErrMsg,
    cform,
    setCform,
  }
  return (
    <>
      <div className="px-4 pt-4">
        <Stepper
          activeStep={ctx?.registerStep}
          // isLastStep={(value) => setIsLastStep(value)}
          // isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => !success && ctx?.setRegisterStep(0)}>1</Step>
          <Step onClick={() => !success && ctx?.setRegisterStep(1)}>2</Step>
          <Step onClick={() => !success && ctx?.setRegisterStep(2)}>3</Step>
        </Stepper>
      </div>
      <div className="py-5">
        {errMsg && <Alert color="red" className="my-4 md:w-auto w-[90%] mx-auto">{errMsg}</Alert>}
        { !success && ctx?.registerStep === 0 && (
          <Page1 {...pageData} />
        ) }
        { !success && ctx?.registerStep === 1 && (
          <Page2 {...pageData} />
        ) }
        { success && <ThankYouPage /> }
      </div>
    </> 
  )
}

export function Container({ children, ...rest }: { children: ReactNode }) {
  return <div className={`md:px-40 flex flex-1 justify-center py-5 ${rest?.className}`}>
    {children}
  </div>
}
export function Title({ children }: { children: ReactNode }) {
  return <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">{children}</h1>
}

export const CheckRegister = (ctx:any) => {
  if(ctx?.isLoggedIn()) {
    if(!ctx?.userData) {
      ctx?.setRegisterStep(0);
      return true;
    }
    else if(!ctx?.userData?.country) {
      ctx?.setRegisterStep(1);
      return true;
    }
  } else {
    ctx?.setRegisterStep(0);
    return true;
  }
}