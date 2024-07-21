// import { Metadata } from "next";
import React, { useEffect } from "react";
import SanityPageRender from "../components/SanityPageRender";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page",
  description: "",
};

export default function Page(props: any) {
  
  return (
    <>
        <SanityPageRender params={props.params} />
    </>
  )
}