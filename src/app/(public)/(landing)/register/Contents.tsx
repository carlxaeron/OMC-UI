'use client';

import { useEffect, useState } from "react";
import Page1 from "./Page1";
import ThankYouPage from "./ThankYou";
import { Alert, Step, Stepper } from "@material-tailwind/react";
import { useStore } from "@/app/context/provider";
import { ReactNode } from "react";
import Page2 from "./Page2";
import Page3 from "./Page3";

export type pageDataTypes = {
  success: boolean,
  setSuccess: any,
  isLoading: boolean,
  setIsLoading: any,
  errMsg: string,
  setErrMsg: any,
  cform: any,
  setCform: any,
}

export default function Contents() {
  const storeState = useStore((state) => state.state);
  const storeAction = useStore((state) => state);

  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [step, setStep] = useState(0);
  const defaultFormValues = {
    email: '',
    password: '',
    rpassword: '',
    first_name: '',
    last_name: '',
    gender: '',
    country: '',
    date: {
      "startDate": new Date().toISOString(),
      "endDate": new Date().toISOString()
    },
    otherInfo: {
      // mission: '',
      // church: '',
      // membership: '',
    }
  };
  const cform = {...defaultFormValues,  ...storeState.cform};
  const setCform = (form:any) => storeAction.setCform(form);

  useEffect(() => {
    setCform(defaultFormValues);
    if(!storeAction.is.loggedIn() && storeState.landingEmail) {
      setCform({
        ...cform,
        email: storeState.landingEmail,
      });
      storeAction.setState({
        landingEmail: '',
      })
    }
  }, [])

  useEffect(() => {
    if(storeAction.is.loggedIn()) {
      if(!storeAction.is.withData()) {
        setCform({
          ...cform,
          email: storeState.userCredential?.user?.email || '',
        })
      } else {
        setCform({
          ...cform,
          email: storeState.userCredential?.user?.email || '',
          first_name: storeState.userData?.first_name || '',
          last_name: storeState.userData?.last_name || '',
          gender: storeState.userData?.gender || '',
          date: {
            "startDate": storeState.userData?.date || new Date().toISOString(),
            "endDate": storeState.userData?.date || new Date().toISOString(),
          }
        });
      }
      setStep(storeState.registerStep);
    }
  }, [storeState.userData])

  useEffect(() => {
    if(errMsg) {
      console.log('errMsg', errMsg);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setErrMsg('');
      }, 5000);
      setIsLoading(false);
    }
  }, [errMsg])

  const pageData = {
    success,
    setSuccess,
    ctx: storeState,
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
          activeStep={storeState.registerStep}
          // isLastStep={(value) => setIsLastStep(value)}
          // isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => (storeAction.is.loggedIn()) && !success && storeAction.setRegisterStep(0)}>1</Step>
          <Step onClick={() => (storeAction.is.loggedIn() && storeAction.is.withData()) && !success && storeAction.setRegisterStep(1)}>2</Step>
          <Step onClick={() => (storeAction.is.loggedIn() && storeAction.is.withData() && storeState.userData?.country) && !success && storeAction.setRegisterStep(2)}>3</Step>
        </Stepper>
      </div>
      <div className="py-5">
        {errMsg && <Alert color="red" className="my-4 md:w-auto w-[90%] mx-auto">{errMsg}</Alert>}
        { !success && storeState.registerStep === 0 && (
          <Page1 {...pageData} />
        ) }
        { !success && storeState.registerStep === 1 && (
          <Page2 {...pageData} />
        ) }
        { !success && storeState.registerStep === 2 && (
          <Page3 {...pageData} />
        ) }
        { success && <ThankYouPage /> }
      </div>
    </> 
  )
}

export function Container({ children, ...rest }: { children: ReactNode }) {
  return <div className={`md:px-40 flex flex-1 justify-center py-5 ${rest?.className || ''}`}>
    {children}
  </div>
}
export function Title({ children }: { children: ReactNode }) {
  return <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">{children}</h1>
}

export const CheckRegister = (ctx:any, action:any) => {
  if(ctx.userCredential) {
    if(!ctx?.userData) {
      action.setRegisterStep(0);
      return true;
    }
    else if(!ctx.userData?.country) {
      action.setRegisterStep(1);
      return true;
    }
    else if(!ctx.userData?.otherInfo) {
      action.setRegisterStep(2);
      return true;
    }
  } else {
    action.setRegisterStep(0);
    return true;
  }
}