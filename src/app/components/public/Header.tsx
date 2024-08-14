export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#" className="text-lg font-bold">{process.env.NEXT_PUBLIC_TITLE}</a>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-sm">Login</a>
            <a href="#" className="text-sm ml-4">Register</a>
          </div>
        </div>
      </div>
    </header>
  )
}