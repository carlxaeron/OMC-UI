'use client';

export function PageHeader(props: { title: string; right?: any }) {
  return (
    <section className="py-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-[1.5rem]">{props.title}</h2>
        { props.right && <div className="flex">{props.right}</div> }
      </div>
    </section>
  )
}