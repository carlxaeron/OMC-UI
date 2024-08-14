'use client';

import { Button } from "@material-tailwind/react";
import classes from "./styles.module.css";
import { motion } from "framer-motion";

export default function Content() {
  return (
    <section className="container flex flex-col justify-center m-auto md:px-4 px-8">
      <div className={`flex flex-col-reverse md:flex-row`}>
        <article className="flex-1 flex justify-center flex-col gap-4">
          <h2 className="text-3xl text-[2.4rem] font-bold md:text-left text-center" style={{lineHeight: '4rem'}}>Unlock Your Potential <br/>with {process.env.NEXT_PUBLIC_TITLE}</h2>
          <p className="md:text-left text-center text-blue-gray-600">Welcome to {process.env.NEXT_PUBLIC_TITLE}, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.</p>
          <div>
            <Button color="blue" className="bg-blue-800 md:w-auto w-full" size="lg" >Start your instructor journey</Button>
          </div>
        </article>
        <div className={`md:w-1/2`}>
          <div className={`relative ${classes.cont}`}>
            <motion.img initial={{top: '10%', left: '1%'}} animate={{top: '26%', left: '9%'}} className="w-[41%] top-[26%] left-[9%]" src="/assets/images/showcase/image1.svg" alt="" />
            <motion.img initial={{bottom: '10%', right: '1%'}} animate={{bottom: '6%', right: '13.5%'}} className="w-[41%] bottom-[6%] right-[13.5%]" src="/assets/images/showcase/image2.svg" alt="" />
            <motion.img initial={{top: '1%', right: '1%'}} animate={{top: '9%', right: '15.5%'}} className="w-[37%] top-[9%] right-[15.5%]" src="/assets/images/showcase/image3.svg" alt="" />
            <motion.img initial={{opacity: 0}} animate={{opacity: 1}} className="w-[5.6%] top-[50.5%] left-[53%]" src="/assets/images/showcase/image4.svg" alt="" />
            <motion.img initial={{opacity: 0}} animate={{opacity: 1}} className="w-[29%] bottom-[9%] left-[32.5%]" src="/assets/images/showcase/image5.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}