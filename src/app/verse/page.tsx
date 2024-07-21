import SanityPageRender from "@/app/components/SanityPageRender";

export default function VersePage() {
  return (
    <>
      <SanityPageRender where={`[sectionId] match "Versepage"`} />
      <SanityPageRender where={`[sectionId] match "Verse-page-authors"`} />
    </>
  );
}