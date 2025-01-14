'use client';

import FindByGroup from "./FindByGroup";
import FindByLocation from "./FindByLocation";
import Missionaries from "./Missionaries";
import Support from "./Support";

export default function Contents({ slug }: { slug: string }) {
  return (
    <>
      { slug === 'index' && <Missionaries /> }
      { slug === 'find-by-group' && <FindByGroup /> }
      { slug === 'find-by-location' && <FindByLocation /> }
      { slug === 'support' && <Support /> }
    </> 
  )
}