import { convertStyleToObject } from "@/app/etc/helper";
import { CheckRegister, Container, pageDataTypes, Title } from "./Contents";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { collection, doc, updateDoc } from "firebase/firestore";
import { findUserByUid, parseFirebaseError } from "@/app/etc/firebase";

export default function Page2(props:pageDataTypes) {
  const [country, setCountry] = useState('');
  const { setIsLoading, setSuccess, setErrMsg, ctx } = props;

  useEffect(() => {
    
  }, [])

  const isSameCty = (cty) => {
    return cty.name.toLowerCase() === country?.toLowerCase()
  }

  const submitCountry = (e:any) => {
    e.preventDefault();
    if(country) {
        setIsLoading(true);

        const fbDb = ctx?.state?.firebase?.db;
        const userDocRef = collection(fbDb, `user_data`);

        const docId = ctx?.userData?.id;
        updateDoc(doc(userDocRef, docId), {
          country,
        }).then(() => {
          setIsLoading(false);
          setSuccess(true);
          ctx?.setState({
            registerStep: 2,
            userData: {
              ...ctx?.userData,
              country,
            }
          });
        }).catch((error2:any) => {
          window.scrollTo(0, 0);
          setErrMsg(parseFirebaseError(error2));
          setTimeout(() => {
            setErrMsg('');
          }, 5000);
          setIsLoading(false);
        });
        // console.log('docId', docId);
        // doc(userDocRef, docId).then((userDoc) => {
        //   console.log('userDoc', userDoc);
        // });
  
        // updateDoc(userDoc, {
        //   country,
        // }).catch((error2:any) => {
        //   window.scrollTo(0, 0);
        //   setErrMsg(parseFirebaseError(error2));
        //   setTimeout(() => {
        //     setErrMsg('');
        //   }, 5000);
        //   setIsLoading(false);
        // });
    }
  }

  return (
    <>
      <Container className="flex-col">
        <Title>Please select the flag of your country.</Title>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {[
          {
            name: "Bangladesh",
            imageUrl: "https://flagcdn.com/w320/bd.png"
          },
          {
            name: "Brunei Darussalam",
            imageUrl: "https://flagcdn.com/w320/bn.png"
          },
          {
            name: "Cambodia",
            imageUrl: "https://flagcdn.com/w320/kh.png"
          },
          {
            name: "Indonesia",
            imageUrl: "https://flagcdn.com/w320/id.png"
          },
          {
            name: "Laos",
            imageUrl: "https://flagcdn.com/w320/la.png"
          },
          {
            name: "Malaysia",
            imageUrl: "https://flagcdn.com/w320/my.png"
          },
          {
            name: "Myanmar",
            imageUrl: "https://flagcdn.com/w320/mm.png"
          },
          {
            name: "Pakistan",
            imageUrl: "https://flagcdn.com/w320/pk.png"
          },
          {
            name: "Philippines",
            imageUrl: "https://flagcdn.com/w320/ph.png"
          },
          {
            name: "Singapore",
            imageUrl: "https://flagcdn.com/w320/sg.png"
          },
          {
            name: "Sri Lanka",
            imageUrl: "https://flagcdn.com/w320/lk.png"
          },
          {
            name: "Thailand",
            imageUrl: "https://flagcdn.com/w320/th.png"
          }
        ].map((flag, index) => (
          <div 
            className="flex flex-col gap-3" key={index}
            onClick={() => setCountry(isSameCty(flag) ? '' : flag.name)}
            >
            {flag.name}
            <div
              className={`${isSameCty(flag) && 'shadow-lg border-solid border-black border-4'} w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl cursor-pointer`}
              style={convertStyleToObject(`background-image: url("${flag.imageUrl}");`)}
            ></div>
          </div>
        ))}
        </div>
        <div className="mt-4 text-center">
          <Button onClick={submitCountry} disabled={!country}>Submit</Button>
        </div>
      </Container>
    </>
  )
}