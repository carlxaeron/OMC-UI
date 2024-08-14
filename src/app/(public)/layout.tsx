export default async function FrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <h1>Frontend Layout</h1>
      {children}
    </section>
  )
}