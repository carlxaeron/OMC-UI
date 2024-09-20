'use client';

import { Context } from "@/app/context/provider";
import { parseFirebaseError } from "@/app/etc/firebase";
import { Alert, Button } from "@material-tailwind/react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { ChangeEvent, use, useContext, useEffect, useState } from "react";

export default function Contents() {
  const ctx = useContext(Context);
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleInput = (key: string, e: ChangeEvent<HTMLInputElement>, value?: string | undefined, oldvalue?: string | undefined) => {
    setForm({
      ...form,
      [key]: value || e.target.value,
    });
  }

  useEffect(() => {
    // if (ctx?.userCredential) {
    //   ctx?.setState({
    //     userCredential: null,
    //   });
    // }
    // if (ctx?.userData) {
    //   ctx?.setState({
    //     userData: null,
    //   });
    // }
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const fbApp = ctx?.state?.firebase?.app;
    if (fbApp) {
      const auth = getAuth(fbApp);
      signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          setIsLoading(false);
          router.push("/home");
          ctx?.setState({
            userCredential,
          })
        })
        .catch((error) => {
          setErrMsg(parseFirebaseError(error));
          setTimeout(() => {
            setErrMsg("");
          }, 5000);
          setIsLoading(false);
        });
    }
  }

  return (
    <>
      {errMsg && <Alert color="red" className="my-4 md:w-auto w-[90%] mx-auto">{errMsg}</Alert>}
      <div className="md:px-40 flex flex-1 justify-center py-5">
        <form onSubmit={submitForm} className="layout-content-container flex flex-col md:max-w-[512px] py-5 flex-1">
          <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">Login</h1>
          <div className="flex flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">Email</p>
              <input
                placeholder="Enter email"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue={form?.email}
                onChange={e => handleInput("email", e)}
                disabled={isLoading}
                required={true}
                type="email"
              />
            </label>
          </div>
          <div className="flex flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">Password</p>
              <input
                placeholder="Enter password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue={form?.password}
                onChange={e => handleInput("password", e)}
                disabled={isLoading}
                required={true}
                type="password"
              />
            </label>
          </div>
          <div className="flex px-4 py-3">
            <Button loading={isLoading} type="submit" color="blue" className="w-full">Login</Button>
          </div>
        </form>
      </div>
    </> 
  )
}