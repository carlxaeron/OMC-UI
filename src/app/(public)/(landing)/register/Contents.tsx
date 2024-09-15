'use client';

import Date from "@/app/components/Date";
import { Button, Alert } from "@material-tailwind/react";
import { ChangeEvent, use, useContext, useEffect, useState } from "react";
import ThankYouPage from "./ThankYou";
import { firebaseConfig } from "@/app/etc/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Context } from "@/app/context/provider";
import { set } from "date-fns";
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export default function Contents() {
  const ctx:any = useContext(Context);

  const defaultValues = {
    date: "",
  }

  const [form, setForm] = useState(defaultValues);
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    if (!form.first_name) {
      return "First name is required";
    }
    if (!form.last_name) {
      return "Last name is required";
    }
    if (!form.email) {
      return "Email is required";
    }
    if (!form.password) {
      return "Password is required";
    }
    if (!form.rpassword) {
      return "Repeat Password is required";
    }
    if (form.rpassword !== form.password) {
      return "Repeat password is not matched with Password";
    }
    if (!form.date) {
      return "Date of birth is required";
    }
    if (!form.gender) {
      return "Gender is required";
    }
    return "";
  };

  const [isDirty, setIsDirty] = useState(false);
  const dirty = () => {
    return isDirty || JSON.stringify(form) !== JSON.stringify(defaultValues);
  }

  const handleDateChange = (date) => {
    setForm({
      ...form,
      date,
    });
  }

  const handleInput = (key: string, e: ChangeEvent<HTMLInputElement>, value: string | undefined, oldvalue: string | undefined) => {
    setForm({
      ...form,
      [key]: value || e.target.value,
    });
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
    setIsDirty(true);
    if (validate()) return;
    const fbApp = ctx?.state?.firebase?.app;
    const fbDb = ctx?.state?.firebase?.db;
    if(fbApp) {
      setIsLoading(true);
      const auth = getAuth(fbApp);
      const email = form.email;
      createUserWithEmailAndPassword(auth, email, form.password)
        .then((resp) => {
          console.log(resp.user.uid);
          console.log(fbDb);

          const userDocRef = collection(fbDb, 'user_data');

          const userData = {
            uid: resp.user.uid,
            first_name: form.first_name || '',
            last_name: form.last_name || '',
            email: email,
            date: form.startDate || '', // Provide a default value if undefined
            gender: form.gender || '',
          };

          addDoc(userDocRef, userData)
          .then((resp2:any) => {
            console.log(resp2);
            setSuccess(true);
            setIsLoading(false);
          })
          .catch((error2:any) => {
            console.log(error2);
            setErrMsg('Error creating account. Please try again later. Or check the email and password you entered.');
            setTimeout(() => {
              setErrMsg('');
            }, 5000);
            setIsLoading(false);
          });
        })
        .catch((error) => {
          console.log(error);
          setErrMsg('Error creating account. Please try again later. Or check the email and password you entered.');
          setTimeout(() => {
            setErrMsg('');
          }, 5000);
          setIsLoading(false);
        });
    }
  }

  return success ? <ThankYouPage /> : (
    <>
      {(dirty() && validate()) && <Alert color="red">{validate()}</Alert>}
      {errMsg && <Alert color="red">{errMsg}</Alert>}
      <div className="md:px-40 flex flex-1 justify-center py-5">
        <form onSubmit={e => e.preventDefault()} className="layout-content-container flex flex-col md:max-w-[512px] py-5 flex-1">
          <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">Create an account</h1>
          <div className="flex md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">First Name</p>
              <input
                placeholder="Enter first name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue={form?.first_name}
                onChange={e => handleInput("first_name", e)}
                disabled={isLoading}
                required
              />
            </label>
          </div>
          <div className="flex md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">Last Name</p>
              <input
                placeholder="Enter last name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue={form?.last_name}
                onChange={e => handleInput("last_name", e)}
                disabled={isLoading}
                required
              />
            </label>
          </div>
          <div className="flex md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">Email</p>
              <input
                placeholder="Enter email address"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue={form?.email}
                onChange={e => handleInput("email", e)}
                type="email"
                disabled={isLoading}
                required
              />
            </label>
          </div>
          <div className="flex md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">Password</p>
              <input
                placeholder="Enter password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue={form?.password}
                onChange={e => handleInput("password", e)}
                type="password"
                disabled={isLoading}
                required
                minLength={8}
              />
            </label>
          </div>
          <div className="flex md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">Repeat Password</p>
              <input
                placeholder="Enter password"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue={form?.rpassword}
                onChange={e => handleInput("rpassword", e)}
                type="password"
                disabled={isLoading}
                required
                minLength={8}
              />
            </label>
          </div>
          <div className="flex md:max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">Date of Birth</p>
              {/* <input
                placeholder="MM/DD/YYYY"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                value=""
              /> */}
              <Date onChange={handleDateChange} />
            </label>
          </div>
          <div className="flex flex-wrap gap-3 p-4 justify-center">
            <label
              className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#1980e6] relative cursor-pointer"
            >
              Male
              <input type="radio" className="invisible absolute" onChange={e => handleInput("gender", e, 'm')} name="997e7f08-6d32-4223-afbb-17d7399f0e41" />
            </label>
            <label
              className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#1980e6] relative cursor-pointer"
            >
              Female
              <input type="radio" className="invisible absolute" onChange={e => handleInput("gender", e, 'f')} name="997e7f08-6d32-4223-afbb-17d7399f0e41" />
            </label>
            <label
              className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#1980e6] relative cursor-pointer"
            >
              Other
              <input type="radio" className="invisible absolute" onChange={e => handleInput("gender", e, 'o')} name="997e7f08-6d32-4223-afbb-17d7399f0e41" />
            </label>
          </div>
          {/* <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
            <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12" data-icon="Camera" data-size="24px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">Profile photo</p>
              <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">This will be public</p>
            </div>
          </div> */}
          <div className="flex px-4 py-3">
            {/* <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Create account</span>
            </button> */}
            <Button type="submit" color="blue" className="w-full" onClick={submitForm} disabled={dirty() && validate()}>Create Account</Button>
          </div>
        </form>
      </div>
    </> 
  )
}