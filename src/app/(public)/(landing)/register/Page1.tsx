'use client';

import Date from "@/app/components/Date";
import { Button, Alert } from "@material-tailwind/react";
import { ChangeEvent, use, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Context } from "@/app/context/provider";
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { CheckRegister, Container, pageDataTypes, Title } from "./Contents";
import { parse } from "path";
import { findUserByUid, parseFirebaseError } from "@/app/etc/firebase";

export default function Page1(props:pageDataTypes) {
  useEffect(() => {
    if(ctx?.isLoggedIn()) {
      if(!ctx?.userData) {
        setForm({
          ...form,
          email: ctx?.userCredential?.user?.email,
        });
      } else {
        setForm({
          ...form,
          email: ctx?.userData?.email,
          first_name: ctx?.userData?.first_name,
          last_name: ctx?.userData?.last_name,
          gender: ctx?.userData?.gender,
        });
      }
    } else {
      if(ctx?.landingEmail) {
        setForm({
          ...form,
          email: ctx?.landingEmail,
        });
        ctx?.setState({
          landingEmail: '',
        });
      }
    }

    return () => {
      if(ctx?.landingEmail) ctx?.setState({
        landingEmail: '',
      })
    }
  }, []);

  const { setIsLoading, isLoading, ctx, setErrMsg, tempData, setTempData } = props;

  const defaultValues = {
    date: "",
  }

  const form = props.cform;
  const setForm = props.setCform;

  const validate = () => {
    if (!form.first_name) {
      return "First name is required";
    }
    if (!form.last_name) {
      return "Last name is required";
    }
    if (!form.gender) {
      return "Gender is required";
    }
    if (!ctx?.isLoggedIn()) {
      if (!form.date) {
        return "Date of birth is required";
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

  const handleInput = (key: string, e: ChangeEvent<HTMLInputElement>, value?: string | undefined, oldvalue?: string | undefined) => {
    setForm({
      ...form,
      [key]: value || e.target.value,
    });
  }

  const submit = {
    account: () => {
      setIsLoading(true);

      const fbApp = ctx?.state?.firebase?.app;
      const auth = getAuth(fbApp);
      const email = form.email;
      createUserWithEmailAndPassword(auth, email, form.password)
        .then((resp) => {
          submit.userData(resp.user.uid)
          
          ctx?.setState({
            userCredential: resp,
          });
          tempData({
            userCredential: resp,
          });
        })
        .catch((error) => {
          window.scrollTo(0, 0);
          setErrMsg(parseFirebaseError(error));
          setTimeout(() => {
            props.setErrMsg('');
          }, 5000);
          setIsLoading(false);
        });
    },
    userData: (uid:any) => {
      setIsLoading(true);

      const fbDb = ctx?.state?.firebase?.db;

      const userData = {
        uid,
        first_name: form.first_name || '',
        last_name: form.last_name || '',
        email: form.email,
        date: form?.date?.startDate || '', // Provide a default value if undefined
        gender: form.gender || '',
      };

      const userDocRef = collection(fbDb, `user_data`);

      addDoc(userDocRef, userData)
      .then((resp2:any) => {
        setIsLoading(false);
        const td = tempData;
        debugger;
        findUserByUid(uid).then((userData) => {
          ctx?.setState({
            userData,
          });
          ctx?.setRegisterStep(1);
        }).catch((e) => { 
            setErrMsg(parseFirebaseError(e));
        });
      })
      .catch((error2:any) => {
        window.scrollTo(0, 0);
        setErrMsg(parseFirebaseError(error2));
        setTimeout(() => {
          setErrMsg('');
        }, 5000);
        setIsLoading(false);
      });

    },
  }

  const submitForm = (e) => {
    e.preventDefault();
    setIsDirty(true);
    if (validate()) return;
    
    if (!ctx?.isLoggedIn()) {
      submit.account();
    } else {
      submit.userData(ctx?.userCredential?.user?.uid);
    }
  }

  const noUserData = ctx?.isLoggedIn() && !ctx?.userData;

  return (
    <>
      {(dirty() && validate()) && <Alert color="red" className="my-4 md:w-auto w-[90%] mx-auto">{validate()}</Alert>}
      <Container>
        <form onSubmit={submitForm} className="layout-content-container flex flex-col md:max-w-[512px] py-5 flex-1">
          <Title>Create Account</Title>
          <div className="flex flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">First Name</p>
              <input
                placeholder="Enter first name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue={form?.first_name}
                onChange={e => handleInput("first_name", e)}
                disabled={isLoading || (ctx?.isLoggedIn() && !noUserData)}
                required
              />
            </label>
          </div>
          <div className="flex flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">Last Name</p>
              <input
                placeholder="Enter last name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue={form?.last_name}
                onChange={e => handleInput("last_name", e)}
                disabled={isLoading || (ctx?.isLoggedIn() && !noUserData)}
                required
              />
            </label>
          </div>
          <div className="flex flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#111418] text-base font-medium leading-normal pb-2">Email</p>
              <input
                placeholder="Enter email address"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                defaultValue={form?.email}
                onChange={e => handleInput("email", e)}
                type="email"
                disabled={isLoading || ctx?.isLoggedIn()}
                required
              />
            </label>
          </div>
          { !ctx?.isLoggedIn() && (
            <>
              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
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
              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#111418] text-base font-medium leading-normal pb-2">Repeat Password</p>
                  <input
                    placeholder="Enter repeat password"
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
            </>
          ) }
          { (!ctx?.isLoggedIn() || noUserData) && (
            <div className="flex flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#111418] text-base font-medium leading-normal pb-2">Date of Birth</p>
                {/* <input
                  placeholder="MM/DD/YYYY"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] focus:outline-0 focus:ring-0 border border-[#dce0e5] bg-white focus:border-[#dce0e5] h-14 placeholder:text-[#637588] p-[15px] text-base font-normal leading-normal"
                  value=""
                /> */}
                <Date value={form?.date} onChange={handleDateChange} />
              </label>
            </div>
          ) }
          <div className="flex flex-wrap gap-3 p-4 justify-center">
            <label
              className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#1980e6] relative cursor-pointer"
            >
              Male
              <input checked={form?.gender === 'm' || false} type="radio" className="invisible absolute" onChange={e => handleInput("gender", e, 'm')} name="997e7f08-6d32-4223-afbb-17d7399f0e41" />
            </label>
            <label
              className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#1980e6] relative cursor-pointer"
            >
              Female
              <input checked={form?.gender === 'f' || false} type="radio" className="invisible absolute" onChange={e => handleInput("gender", e, 'f')} name="997e7f08-6d32-4223-afbb-17d7399f0e41" />
            </label>
            <label
              className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dce0e5] px-4 h-11 text-[#111418] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#1980e6] relative cursor-pointer"
            >
              Other
              <input checked={form?.gender === 'o' || false} type="radio" className="invisible absolute" onChange={e => handleInput("gender", e, 'o')} name="997e7f08-6d32-4223-afbb-17d7399f0e41" />
            </label>
          </div>
          {/* <div className="flex flex-wrap gap-3 p-4 justify-center">
            <Captcha />
          </div> */}
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
            { !ctx?.isLoggedIn() && (
              <Button loading={isLoading} type="submit" color="blue" className="w-full" disabled={dirty() && validate()}>Create Account</Button>
            ) }
            { noUserData && (
              <Button loading={isLoading} type="submit" color="blue" className="w-full" disabled={dirty() && validate()}>Submit</Button>
            ) }
            { ctx?.isLoggedIn() && !noUserData && (
              <Button onClick={e => {
                e.preventDefault();
                ctx?.setRegisterStep(1);
              }} type="button" color="blue" className="w-full">Next</Button>
            ) }
          </div>
        </form>
      </Container>
    </> 
  )
}