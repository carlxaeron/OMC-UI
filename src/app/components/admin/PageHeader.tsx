export function PageHeader(props: { title: string }) {
  return (
    <section className="py-4">
      <h2 className="font-semibold text-[1.5rem]">{props.title}</h2>
    </section>
  )
}